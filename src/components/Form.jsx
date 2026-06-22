import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InfoMessage = ({ error, defaultMsg }) => (
  <div className="flex justify-start items-center mt-2 gap-1">
    <img
      src="/assets/images/icon-info.svg"
      alt=""
      aria-hidden="true"
      style={error ? { filter: 'invert(29%) sepia(99%) saturate(1000%) hue-rotate(330deg) brightness(95%) contrast(110%)' } : {}}
    />
    <p className={error ? "text-red-400 text-xs" : "text-gray-500 text-xs"}>
      {error || defaultMsg}
    </p>
  </div>
);

const Form = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    github: "",
    avatar: null,
    avatarPreview: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      if (formData.avatarPreview) {
        URL.revokeObjectURL(formData.avatarPreview);
      }
    };
  }, [formData.avatarPreview]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      setErrors((prev) => ({
        ...prev,
        avatar: "File too large. Please upload a photo under 500KB.",
      }));
      return;
    }

    if (formData.avatarPreview) {
      URL.revokeObjectURL(formData.avatarPreview);
    }

    setErrors((prev) => ({ ...prev, avatar: "" }));
    setFormData((prev) => ({
      ...prev,
      avatar: file,
      avatarPreview: URL.createObjectURL(file),
    }));
  };

  const handleRemoveAvatar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (formData.avatarPreview) {
      URL.revokeObjectURL(formData.avatarPreview);
    }
    setFormData((prev) => ({ ...prev, avatar: null, avatarPreview: null }));
    setErrors((prev) => ({ ...prev, avatar: "" }));
  };

  const handleChangeImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.avatarPreview) newErrors.avatar = "Please upload an avatar.";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.github.trim()) newErrors.github = "GitHub username is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    navigate("/success", {
      state: {
        firstName: formData.firstName,
        email: formData.email,
        github: formData.github,
        avatarPreview: formData.avatarPreview,
      },
    });
  };

  const inputClass = (field) =>
    `w-full p-2 rounded-xl bg-[hsl(249,50%,16%)] border-2 text-white outline-none
    focus:ring-2 focus:ring-[hsl(245,15%,58%)] focus:ring-offset-2 focus:ring-offset-[hsl(249,50%,16%)]
    transition-colors cursor-pointer hover:bg-[hsl(245,19%,35%)]/65
    ${errors[field] ? "border-red-400" : "border-[hsl(245,19%,35%)]"}`;

  return (
    <div className="py-8">
      <form className="flex flex-col gap-4 md:w-md" onSubmit={handleSubmit}>

        {/* Avatar Upload */}
        <div>
          <label
            htmlFor="avatar-upload"
            className="text-[hsl(252,6%,83%)] pb-3 text-[1.2rem] block"
          >
            Upload Avatar
          </label>
          <label
            tabIndex={0}
            className={`flex flex-col items-center justify-center h-36 border-2 border-dashed bg-[hsl(249,50%,16%)] rounded-xl cursor-pointer transition-colors outline-none
            focus:ring-2 focus:ring-[hsl(245,15%,58%)] focus:ring-offset-2 focus:ring-offset-[hsl(249,50%,16%)] hover:bg-[hsl(245,19%,35%)]/65
            ${errors.avatar ? "border-red-400" : "border-[hsl(245,19%,35%)]"}`}
          >
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleAvatarChange}
            />
            {formData.avatarPreview ? (
              <div className="flex flex-col justify-center items-center">
                <img
                  src={formData.avatarPreview}
                  alt="Avatar preview"
                  className="w-12 h-12 object-cover rounded-xl md:w-15 md:h-15"
                />
                <div className="flex justify-between items-center gap-2 py-3">
                  <button
                    onClick={handleRemoveAvatar}
                    className="border border-[hsl(245,14%,33%)]/30 bg-[hsl(245,14%,33%)]/30 text-gray-400 text-xs hover:underline
                    rounded-sm px-2 py-1 cursor-pointer md:px-3 md:py-2"
                  >
                    Remove image
                  </button>
                  <button
                    onClick={handleChangeImage}
                    className="border border-[hsl(245,14%,33%)]/30 bg-[hsl(245,14%,33%)]/30 text-gray-400 text-xs hover:underline 
                    rounded-sm px-2 py-1 cursor-pointer md:px-3 md:py-2"
                  >
                    Change image
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src="/assets/images/icon-upload.svg"
                  alt=""
                  aria-hidden="true"
                  width={50}
                  className="border-[hsl(247,20%,26%)] bg-[hsl(247,20%,26%)] p-2.5 rounded-xl border-2 text-white outline-none focus:border-white transition-colors"
                />
                <span className="tracking-wider text-gray-400 pt-4 px-5 text-lg">
                  Drag and drop or click to upload
                </span>
              </>
            )}
          </label>
          <InfoMessage
            error={errors.avatar}
            defaultMsg="Upload your photo (JPG or PNG, max size: 500KB)"
          />
        </div>

        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="text-[hsl(252,6%,83%)] text-[1.2rem] pb-2 pt-1 block"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass("firstName")}
          />
          {errors.firstName && <InfoMessage error={errors.firstName} />}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-[hsl(252,6%,83%)] text-[1.2rem] pb-2 block"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass("email")}
          />
          {errors.email && <InfoMessage error={errors.email} />}
        </div>

        {/* GitHub */}
        <div>
          <label
            htmlFor="github"
            className="text-[hsl(252,6%,83%)] text-[1.2rem] pb-2 block"
          >
            GitHub Username
          </label>
          <input
            id="github"
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="e.g. octocat"
            className={inputClass("github")}
          />
          {errors.github && <InfoMessage error={errors.github} />}
        </div>

        <button
          type="submit"
          className="bg-[hsl(7,88%,67%)] p-2 text-center text-[hsl(248,70%,10%)] font-bold w-full mt-1 rounded-xl
          focus:ring-2 focus:ring-[hsl(245,15%,58%)] focus:ring-offset-2 focus:ring-offset-[hsl(249,50%,16%)]
          cursor-pointer hover:bg-[hsl(7,71%,60%)]"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
};

export default Form;