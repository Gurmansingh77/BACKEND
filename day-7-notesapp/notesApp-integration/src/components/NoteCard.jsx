import { FileText, Trash2, Pencil } from "lucide-react";

const NoteCard = ({ title, description, onDelete, onUpdate , note , deleteNote , notForUpdate }) => {
  return (
    <div className="w-90 max-w-2xl  rounded-2xl border border-slate-700/60 bg-[#151923] p-6 text-white shadow-xl transition duration-300 hover:border-slate-600 sm:p-8">
      
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
            <FileText size={30} />
          </div>

          <h2 className=" text-2xl font-bold tracking-tight sm:text-3xl">
            {note.title}
          </h2>
        </div>

        <span className="shrink-0 text-sm text-slate-400">
          {new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
          Description
        </h3>

        <p className="whitespace-pre-wrap  text-base leading-7 text-slate-300">
          {note.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-space-evenly gap-3 border-t border-slate-700/60 pt-6">
        <button
          onClick={() => deleteNote(note._id)}
          className="flex items-center gap-2 rounded-xl border border-red-500/50 px-5 py-3 font-semibold text-red-400 transition hover:bg-red-500/10 active:scale-95"
        >
          <Trash2 size={18} />
          Delete
        </button>

        <button
          onClick={() => notForUpdate(note)}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-95"
        >
          <Pencil size={18} />
          Update
        </button>
      </div>
    </div>
  );
};

export default NoteCard;