import { ArrowRight, Axis3DIcon, ImagePlus, Mail, UserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    const formData = new FormData()

    formData.append("name" , data.name)
    formData.append("email" , data.email)
    formData.append("profilePic" , data.profilePic[0])

    await axios.post("http://localhost:3000/user/create",formData)

    console.log(formData)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <section className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
        <div className="mb-8">
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
            <UserRound size={24} aria-hidden="true" />
          </span>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Your profile
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tell us about yourself
          </h1>
          <p className="mt-3 leading-6 text-slate-400">
            Add your details and a profile picture to get started.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          encType="multipart/form-data"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
              Name
            </label>
            <div className="relative">
              <UserRound
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <input
                {...register('name', {
                  required: 'Please enter your name.',
                  validate: (value) => value.trim().length > 0 || 'Name cannot be blank.',
                })}
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10"
              />
            </div>
            {errors.name && (
              <p className="mt-2 text-sm text-rose-300" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <input
                {...register('email', {
                  required: 'Please enter your email address.',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-rose-300" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="profilePic" className="mb-2 block text-sm font-medium text-slate-200">
              Profile picture
            </label>
            <label
              htmlFor="profilePic"
              className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-4 transition hover:border-violet-400/70 hover:bg-violet-400/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-violet-300">
                <ImagePlus size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-200">Choose an image</span>
                <span className="mt-1 block text-xs text-slate-500">
                  PNG, JPG or WEBP · up to 5 MB
                </span>
              </span>
              <input
                {...register('profilePic', {
                  validate: {
                    required: (files) =>
                      files?.length === 1 || 'Please choose a profile picture.',
                    fileType: (files) =>
                      !files?.length ||
                      ['image/png', 'image/jpeg', 'image/webp'].includes(files[0].type) ||
                      'Choose a PNG, JPG, or WEBP image.',
                    fileSize: (files) =>
                      !files?.length ||
                      files[0].size <= 5 * 1024 * 1024 ||
                      'The image must be 5 MB or smaller.',
                  },
                })}
                id="profilePic"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="sr-only"
              />
            </label>
            {errors.profilePic && (
              <p className="mt-2 text-sm text-rose-300" role="alert">
                {errors.profilePic.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 font-semibold text-white transition hover:bg-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-400/30"
          >
            Create profile
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          {isSubmitSuccessful && (
            <p className="text-center text-sm text-emerald-300" role="status">
              Validation passed. Your profile details are ready to submit.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default App
