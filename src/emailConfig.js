// Konfigurasi EmailJS — nilai diisi lewat file .env (lihat .env.example). Bukan tempat untuk secret:
// variabel VITE_ ikut masuk ke kode browser. Alamat email penerima TIDAK ada di sini; diatur di template EmailJS.
const v = k => (import.meta.env[k] || '').trim()
export const emailConfig = {
  publicKey: v('VITE_EMAILJS_PUBLIC_KEY'),
  serviceId: v('VITE_EMAILJS_SERVICE_ID'),
  templateId: v('VITE_EMAILJS_TEMPLATE_ID'),
  maxLength: 2000
}
export const emailReady = [emailConfig.publicKey, emailConfig.serviceId, emailConfig.templateId].every(x => x && !x.startsWith('your_'))
