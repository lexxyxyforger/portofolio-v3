export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "GitHub Profile Generator",
    category: "Developer",
    shortDesc: "Automated profile readme generator for GitHub.",
    fullDesc: "Platform untuk mengotomatisasi pembuatan profil GitHub Readme yang estetik. Terintegrasi dengan GitHub API untuk mengambil statistik user secara real-time dan menyediakan berbagai preset layout modern.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    screenshots: ["/images/github1.png", "/images/github2.png"]
  },
  {
    id: "02",
    title: "All In One Toolkit",
    category: "Utility",
    shortDesc: "Comprehensive developer dashboard with essential tools.",
    fullDesc: "Satu dashboard untuk semua kebutuhan harian developer. Mencakup JSON Formatter, Unit Converter, Base64 Encoder, hingga Color Palette Generator dalam satu antarmuka yang clean.",
    tech: ["TypeScript", "React", "Tailwind"],
    screenshots: ["/images/tool1.png", "/images/tool2.png"]
  },
  {
    id: "03",
    title: "Media Downloader",
    category: "Utility",
    shortDesc: "High-speed media extraction from various platforms.",
    fullDesc: "Aplikasi utilitas untuk mengekstrak dan mengunduh konten media (video & audio) dari berbagai platform sosial media melalui parsing URL dan integrasi third-party API.",
    tech: ["TypeScript", "Next.js", "External API"],
    screenshots: ["/images/media1.png", "/images/media2.png"]
  },
  {
    id: "04",
    title: "Student Activity System",
    category: "Education",
    shortDesc: "Monitoring and activity tracking for students.",
    fullDesc: "Sistem manajemen aktivitas siswa berbasis web. Memungkinkan pihak sekolah untuk memantau kehadiran, pencapaian, dan laporan kegiatan harian dalam satu sistem dashboard yang terpusat.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    screenshots: ["/images/student1.png", "/images/student2.png"]
  },
  {
    id: "05",
    title: "Capture The Web",
    category: "Utility",
    shortDesc: "Full-page website screenshot as a service.",
    fullDesc: "Layanan screenshot website secara instan. User cukup memasukkan URL, dan sistem akan melakukan rendering serta capturing halaman web tersebut dalam berbagai ukuran viewport.",
    tech: ["TypeScript", "Next.js", "Puppeteer API"],
    screenshots: ["/images/capture1.png", "/images/capture2.png"]
  },
  {
    id: "06",
    title: "Code Snippet Manager",
    category: "Developer",
    shortDesc: "Cloud-based personal code library.",
    fullDesc: "Aplikasi pengelola potongan kode (snippet) dengan dukungan Syntax Highlighting untuk berbagai bahasa. Memudahkan developer menyimpan dan mencari kembali solusi koding yang sering digunakan.",
    tech: ["TypeScript", "React", "PrismJS"],
    screenshots: ["/images/snippet1.png", "/images/snippet2.png"]
  },
  {
    id: "07",
    title: "Portfolio V2 (Neo-Brutalism)",
    category: "Personal",
    shortDesc: "Personal showcase with cutting-edge design.",
    fullDesc: "Iterasi kedua dari website portfolio personal. Mengeksplorasi desain Neo-Brutalism dengan animasi Framer Motion yang kompleks dan optimasi SEO maksimal.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    screenshots: ["/images/porto1.png", "/images/porto2.png"]
  },
  {
    id: "08",
    title: "URL Shortener Pro",
    category: "Utility",
    shortDesc: "Fast and reliable link shortening service.",
    fullDesc: "Alat untuk menyingkat URL panjang menjadi link yang lebih mudah diingat. Dilengkapi dengan sistem redirect cepat dan tracking jumlah klik sederhana (Client-side memory).",
    tech: ["TypeScript", "Next.js", "Edge API"],
    screenshots: ["/images/url1.png", "/images/url2.png"]
  },
  {
    id: "09",
    title: "Portfolio Next.js Elite",
    category: "Personal",
    shortDesc: "Clean and minimalist developer portfolio.",
    fullDesc: "Website personal yang fokus pada kecepatan loading dan keterbacaan. Menggunakan Server Components Next.js untuk performa terbaik dalam menampilkan daftar project.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    screenshots: ["/images/porto3.png", "/images/porto4.png"]
  },
  {
    id: "10",
    title: "Trading Simulation App",
    category: "Fintech",
    shortDesc: "Market price tracking and trading simulator.",
    fullDesc: "Simulator perdagangan aset digital yang mengambil data harga real-time dari market. User bisa belajar melakukan analisa teknikal sederhana melalui integrasi chart interaktif.",
    tech: ["TypeScript", "Finnhub API", "Chart.js"],
    screenshots: ["/images/trading2.png", "/images/trading1.png"]
  },
    {
    id: "11",
    title: "Playlist Spotify Generator",
    category: "Entertainment",
    shortDesc: "Generate custom Spotify playlists based on mood.",
    fullDesc: "Aplikasi yang memungkinkan pengguna untuk membuat playlist Spotify khusus berdasarkan suasana hati atau genre musik yang diinginkan. Menggunakan API Spotify untuk mengambil data dan mengatur playlist secara otomatis.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    screenshots: ["/images/spotify1.png", "/images/spotify2.png"]
  },
    {
    id: "12",
    title: "Cv generator",
    category: "Utility",
    shortDesc: "Generate professional CVs in seconds.",
    fullDesc: "Aplikasi yang memungkinkan pengguna untuk membuat CV profesional dalam hitungan detik. Dengan berbagai template dan kemampuan personalisasi, pengguna bisa menghasilkan CV yang menarik dan sesuai dengan kebutuhan pasar kerja.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    screenshots: ["/images/cv1.png", "/images/cv2.png"]
  },
];