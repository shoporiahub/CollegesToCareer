import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
    BriefcaseBusiness,
    Camera,
    Globe,
    Link2,
    MapPin,
    UserRound,
    X,
} from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";
import {uploadProfilePhoto} from "../../upload/services/upload.service";

function PersonalInformation() {
    const {
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const [uploadingPhoto, setUploadingPhoto] = useState(false);

    const profilePhoto = watch("profile_photo");


    /* =========================================================
     * PROFILE PHOTO
     * ========================================================= */

    const handlePhotoUpload = async (
        file: File,
    ) => {
        try {
            setUploadingPhoto(true);

            const url =
                await uploadProfilePhoto(file);

            setValue(
                "profile_photo",
                url,
                {
                    shouldDirty: true,
                    shouldValidate: true,
                },
            );
        } catch (error) {
            console.error(
                "Profile photo upload failed:",
                error,
            );
        } finally {
            setUploadingPhoto(false);
        }
    };


    const handlePhotoChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file =
            event.target.files?.[0];

        if (!file) {
            return;
        }

        await handlePhotoUpload(file);

        /*
         * Allows the user to select the same
         * file again after removing/changing it.
         */
        event.target.value = "";
    };


    const handleRemovePhoto = () => {
        setValue(
            "profile_photo",
            "",
            {
                shouldDirty: true,
                shouldValidate: true,
            },
        );
    };


    return (
        <div className="space-y-12">


            {/* ===================================================== */}
            {/* BASIC INFORMATION */}
            {/* ===================================================== */}

            <section>

                <div className="mb-7">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <UserRound size={21} />
                        </div>

                        <div>

                            <h3 className="text-xl font-extrabold tracking-tight text-blue-700">
                                Basic Information
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Tell us who you are and how employers can contact you.
                            </p>

                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* PROFILE PHOTO */}
                {/* ================================================= */}

                <div className="mb-8">

                    <FormField
                        label="Profile Photo"
                        error={
                            errors.profile_photo?.message as
                            | string
                            | undefined
                        }
                    >

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">


                            {/* Photo Preview */}

                            <div className="relative shrink-0">

                                {profilePhoto ? (

                                    <div className="relative">

                                        <img
                                            src={profilePhoto}
                                            alt="Profile preview"
                                            className="
                                                h-28
                                                w-28
                                                rounded-2xl
                                                border-2
                                                border-slate-200
                                                object-cover
                                                shadow-sm
                                            "
                                        />

                                        {!uploadingPhoto && (
                                            <button
                                                type="button"
                                                onClick={
                                                    handleRemovePhoto
                                                }
                                                className="
                                                    absolute
                                                    -right-2
                                                    -top-2
                                                    flex
                                                    h-7
                                                    w-7
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-red-500
                                                    text-white
                                                    shadow-md
                                                    transition
                                                    hover:bg-red-600
                                                "
                                                aria-label="Remove profile photo"
                                            >
                                                <X size={14} />
                                            </button>
                                        )}

                                    </div>

                                ) : (

                                    <div
                                        className="
                                            flex
                                            h-28
                                            w-28
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border-2
                                            border-dashed
                                            border-slate-300
                                            bg-slate-50
                                            text-slate-400
                                        "
                                    >
                                        <Camera size={30} />
                                    </div>

                                )}

                            </div>


                            {/* Upload */}

                            <div>

                                <label
                                    htmlFor="profile-photo"
                                    className={`
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-blue-200
                                        bg-blue-50
                                        px-5
                                        py-3
                                        text-sm
                                        font-bold
                                        text-blue-700
                                        transition
                                        ${uploadingPhoto
                                            ? "cursor-not-allowed opacity-60"
                                            : "cursor-pointer hover:border-blue-300 hover:bg-blue-100"
                                        }
                                    `}
                                >

                                    <Camera size={18} />

                                    {uploadingPhoto
                                        ? "Uploading..."
                                        : profilePhoto
                                            ? "Change Photo"
                                            : "Upload Photo"}

                                </label>


                                <input
                                    id="profile-photo"
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    disabled={uploadingPhoto}
                                    className="hidden"
                                    onChange={
                                        handlePhotoChange
                                    }
                                />


                                <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
                                    Upload a clear professional photo.
                                    JPG, PNG, or WebP. Maximum size 5 MB.
                                </p>

                            </div>

                        </div>

                    </FormField>

                </div>


                {/* ================================================= */}
                {/* NAME / CONTACT */}
                {/* ================================================= */}

                <div className="grid gap-6 md:grid-cols-2">


                    {/* First Name */}

                    <FormField
                        label="First Name"
                        error={
                            errors.first_name?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="Enter your first name"
                            autoComplete="given-name"
                            {...register("first_name", {
                                required:
                                    "First name is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "First name must contain at least 2 characters.",
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        "First name cannot exceed 100 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Last Name */}

                    <FormField
                        label="Last Name"
                        error={
                            errors.last_name?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="Enter your last name"
                            autoComplete="family-name"
                            {...register("last_name", {
                                required:
                                    "Last name is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "Last name must contain at least 2 characters.",
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        "Last name cannot exceed 100 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Email */}

                    <FormField
                        label="Email Address"
                        error={
                            errors.email?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            {...register("email", {
                                required:
                                    "Email address is required.",
                                pattern: {
                                    value:
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message:
                                        "Please enter a valid email address.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Phone */}

                    <FormField
                        label="Phone Number"
                        error={
                            errors.phone?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            autoComplete="tel"
                            {...register("phone", {
                                required:
                                    "Phone number is required.",
                                pattern: {
                                    value:
                                        /^[+]?[\d\s()-]{7,20}$/,
                                    message:
                                        "Please enter a valid phone number.",
                                },
                            })}
                        />

                    </FormField>

                </div>

            </section>


            {/* ===================================================== */}
            {/* PROFESSIONAL PROFILE */}
            {/* ===================================================== */}

            <section className="border-t border-slate-200 pt-12">

                <div className="mb-7">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                            <BriefcaseBusiness size={21} />
                        </div>

                        <div>

                            <h3 className="text-xl font-extrabold tracking-tight text-violet-700">
                                Professional Profile
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Introduce yourself with a strong professional headline and summary.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="space-y-7">


                    {/* Resume Title */}

                    <FormField
                        label="Resume Title"
                        error={
                            errors.title?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="e.g. Software Engineer Resume"
                            {...register("title", {
                                required:
                                    "Resume title is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "Resume title must contain at least 2 characters.",
                                },
                                maxLength: {
                                    value: 255,
                                    message:
                                        "Resume title cannot exceed 255 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Headline */}

                    <FormField
                        label="Professional Headline"
                        error={
                            errors.headline?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="e.g. Full Stack Developer"
                            {...register("headline", {
                                required:
                                    "Professional headline is required.",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Headline must contain at least 3 characters.",
                                },
                                maxLength: {
                                    value: 255,
                                    message:
                                        "Headline cannot exceed 255 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Summary */}

                    <FormField
                        label="Professional Summary"
                        error={
                            errors.summary?.message as
                            | string
                            | undefined
                        }
                    >

                        <textarea
                            {...register("summary", {
                                required:
                                    "Professional summary is required.",
                                minLength: {
                                    value: 30,
                                    message:
                                        "Professional summary must contain at least 30 characters.",
                                },
                                maxLength: {
                                    value: 2000,
                                    message:
                                        "Professional summary cannot exceed 2000 characters.",
                                },
                            })}
                            rows={7}
                            placeholder="Write a short professional summary describing your experience, strengths, and career goals..."
                            className="
                                w-full
                                resize-y
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
                                px-4
                                py-3
                                text-sm
                                leading-6
                                text-slate-900
                                outline-none
                                transition-all
                                duration-200
                                placeholder:text-slate-400
                                hover:border-slate-400
                                focus:border-violet-500
                                focus:ring-4
                                focus:ring-violet-100
                            "
                        />

                    </FormField>

                </div>

            </section>


            {/* ===================================================== */}
            {/* LOCATION */}
            {/* ===================================================== */}

            <section className="border-t border-slate-200 pt-12">

                <div className="mb-7">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <MapPin size={21} />
                        </div>

                        <div>

                            <h3 className="text-xl font-extrabold tracking-tight text-emerald-700">
                                Location
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Add your current location so recruiters know where you're based.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="grid gap-6 md:grid-cols-2">


                    {/* Address */}

                    <div className="md:col-span-2">

                        <FormField
                            label="Address"
                            error={
                                errors.address?.message as
                                | string
                                | undefined
                            }
                        >

                            <Input
                                placeholder="Enter your address"
                                autoComplete="street-address"
                                {...register("address", {
                                    required:
                                        "Address is required.",
                                    maxLength: {
                                        value: 500,
                                        message:
                                            "Address cannot exceed 500 characters.",
                                    },
                                })}
                            />

                        </FormField>

                    </div>


                    {/* City */}

                    <FormField
                        label="City"
                        error={
                            errors.city?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="e.g. Bengaluru"
                            autoComplete="address-level2"
                            {...register("city", {
                                required:
                                    "City is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "City must contain at least 2 characters.",
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        "City cannot exceed 100 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* State */}

                    <FormField
                        label="State"
                        error={
                            errors.state?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="e.g. Karnataka"
                            autoComplete="address-level1"
                            {...register("state", {
                                required:
                                    "State is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "State must contain at least 2 characters.",
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        "State cannot exceed 100 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Country */}

                    <FormField
                        label="Country"
                        error={
                            errors.country?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="e.g. India"
                            autoComplete="country-name"
                            {...register("country", {
                                required:
                                    "Country is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "Country must contain at least 2 characters.",
                                },
                                maxLength: {
                                    value: 100,
                                    message:
                                        "Country cannot exceed 100 characters.",
                                },
                            })}
                        />

                    </FormField>


                    {/* Pincode */}

                    <FormField
                        label="Pincode"
                        error={
                            errors.pincode?.message as
                            | string
                            | undefined
                        }
                    >

                        <Input
                            placeholder="Enter your pincode"
                            autoComplete="postal-code"
                            {...register("pincode", {
                                required:
                                    "Pincode is required.",
                                pattern: {
                                    value: /^\d{5,10}$/,
                                    message:
                                        "Please enter a valid pincode.",
                                },
                            })}
                        />

                    </FormField>

                </div>

            </section>


            {/* ===================================================== */}
            {/* ONLINE PROFILES */}
            {/* ===================================================== */}

            <section className="border-t border-slate-200 pt-12">

                <div className="mb-7">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <Globe size={21} />
                        </div>

                        <div>

                            <h3 className="text-xl font-extrabold tracking-tight text-amber-700">
                                Online Profiles
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                Add your professional links. These are optional.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="grid gap-6 md:grid-cols-2">


                    {/* LinkedIn */}

                    <FormField
                        label="LinkedIn"
                        error={
                            errors.linkedin_url?.message as
                            | string
                            | undefined
                        }
                    >

                        <div className="relative">

                            <Link2
                                size={18}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                "
                            />

                            <Input
                                type="url"
                                placeholder="https://linkedin.com/in/yourname"
                                className="pl-11"
                                {...register("linkedin_url", {
                                    pattern: {
                                        value:
                                            /^https?:\/\/.+/,
                                        message:
                                            "Please enter a valid URL starting with http:// or https://.",
                                    },
                                })}
                            />

                        </div>

                    </FormField>


                    {/* GitHub */}

                    <FormField
                        label="GitHub"
                        error={
                            errors.github_url?.message as
                            | string
                            | undefined
                        }
                    >

                        <div className="relative">

                            <Link2
                                size={18}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                "
                            />

                            <Input
                                type="url"
                                placeholder="https://github.com/yourname"
                                className="pl-11"
                                {...register("github_url", {
                                    pattern: {
                                        value:
                                            /^https?:\/\/.+/,
                                        message:
                                            "Please enter a valid URL starting with http:// or https://.",
                                    },
                                })}
                            />

                        </div>

                    </FormField>


                    {/* Portfolio */}

                    <FormField
                        label="Portfolio"
                        error={
                            errors.portfolio_url?.message as
                            | string
                            | undefined
                        }
                    >

                        <div className="relative">

                            <Link2
                                size={18}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                "
                            />

                            <Input
                                type="url"
                                placeholder="https://yourportfolio.com"
                                className="pl-11"
                                {...register("portfolio_url", {
                                    pattern: {
                                        value:
                                            /^https?:\/\/.+/,
                                        message:
                                            "Please enter a valid URL starting with http:// or https://.",
                                    },
                                })}
                            />

                        </div>

                    </FormField>


                    {/* Website */}

                    <FormField
                        label="Personal Website"
                        error={
                            errors.website_url?.message as
                            | string
                            | undefined
                        }
                    >

                        <div className="relative">

                            <Link2
                                size={18}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                "
                            />

                            <Input
                                type="url"
                                placeholder="https://yourwebsite.com"
                                className="pl-11"
                                {...register("website_url", {
                                    pattern: {
                                        value:
                                            /^https?:\/\/.+/,
                                        message:
                                            "Please enter a valid URL starting with http:// or https://.",
                                    },
                                })}
                            />

                        </div>

                    </FormField>

                </div>

            </section>


            {/* ===================================================== */}
            {/* INFORMATION MESSAGE */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <div className="flex gap-3">

                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <UserRound size={16} />
                    </div>

                    <div>

                        <p className="text-sm font-bold text-blue-800">
                            Make your first impression count
                        </p>

                        <p className="mt-1 text-sm leading-6 text-blue-700/80">
                            Keep your information accurate and professional.
                            You can always come back and update these details later.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default PersonalInformation;