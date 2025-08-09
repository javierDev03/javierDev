import { Play, Clock, Eye, MessageSquare, LinkIcon, Share2 } from "lucide-react"

export function HomeContent() {
  return (
    <div className="p-6 bg-gray-800 rounded-r-xl shadow-lg flex-grow">
      <h1 className="text-4xl font-bold text-white mb-6">Fernando Castillo</h1>
      <p className="text-gray-400 text-lg mb-8">Fullstack</p>

      <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src="/video-thumbnail.png"
          alt="Video Thumbnail"
        
          className="brightness-75"
        />
        <button className="absolute bg-white/80 backdrop-blur-sm p-4 rounded-full text-gray-900 hover:bg-white transition-colors">
          <Play className="w-10 h-10 fill-current" />
        </button>
        <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
          <img src="/profile-avatar.png" alt="Fernando Castillo" width={20} height={20} className="rounded-full" />
          <span>Fernando Castillo - Web and Mobile Developer</span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm bg-black/60 px-3 py-1 rounded-full">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> 1 min
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" /> 148 views
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-3 text-white text-sm bg-black/60 px-3 py-1 rounded-full">
          <MessageSquare className="w-4 h-4" />
          <LinkIcon className="w-4 h-4" />
          <Share2 className="w-4 h-4" />
        </div>
        <div className="absolute bottom-4 right-4 text-white text-xs bg-black/60 px-3 py-1 rounded-full">
          Powered by <span className="text-purple-400">loom</span>
        </div>
      </div>
    </div>
  )
}
