# Bütçe Takip

Bütçe Takip, React ve Tailwind CSS kullanılarak geliştirilmiş bir gelir-gider takip uygulamasıdır. Kullanıcılar gelir ve gider işlemlerini ekleyebilir, listeleyebilir, güncelleyebilir ve silebilir. Veriler tarayıcının LocalStorage alanında saklanır.

## Özellikler

- Gelir ve gider ekleme
- İşlemleri listeleme
- İşlem güncelleme
- İşlem silme
- Kategoriye göre filtreleme
- Başlığa göre arama
- Toplam gelir, toplam gider ve bakiye görüntüleme
- LocalStorage ile veri saklama

## Kullanılan Teknolojiler

- React
- Vite
- JavaScript
- Tailwind CSS
- LocalStorage

## Projeyi Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için önce bağımlılıkları yükleyin:

```bash
npm install
Daha sonra geliştirme sunucusunu başlatın:

npm run dev
PowerShell üzerinde npm komutu engellenirse şu komut kullanılabilir:

npm.cmd run dev
Build Alma
Projeyi yayına hazır hale getirmek için:

npm run build
Build sonrası oluşan dosyalar dist klasöründe yer alır.

Yayına Alma
Bu proje Netlify veya Vercel gibi platformlarda yayınlanabilir.

Netlify için ayarlar:

Build command: npm run build
Publish directory: dist
Klasör Yapısı
src/
├── components/
├── hooks/
├── interfaces/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
Proje Amacı
Bu proje, modern JavaScript kütüphanelerinden React kullanılarak temel CRUD işlemlerinin uygulanması amacıyla geliştirilmiştir.
```
