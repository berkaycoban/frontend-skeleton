# Web application skeleton

## BENİ OKU

Bu kod web site tasarım geliştirmelerinde kullanabileceğiniz alt yapıdır.

### Çalışma Ortamını Hazırlamak

`node.js`'in sisteminizde kurulu olduğundan emin olun.

Repository'i klonlayıp, npm üzerinden bağımlılıkları çekerek çalışma ortamınızı hazır hale getirin.

```sh
git clone https://github.com/berkaycoban/frontend-skeleton.git
cd frontend-skeleton
npm install
gulp
```

### Çalışmaya Başlamak

`gulp` komutu ile geliştirmeye başlayabilirsiniz. Komutu çalıştırdıktan bir süre
sonra browser'ınız açılacak, siz değişiklik yaptığınız sürece "browser-sync" sayesinde browser'daki kod otomatik olarak
güncellenecektir.

## Dizin Yapısı

| Klasör            | Açıklama                                      |
| ----------------- | --------------------------------------------- |
| `/scss/`          | - Scss stil dosyalarını içeren klasör         |
| `/scss/config/`   | - Stil yapılandırma dosyaları                 |
| `/scss/helper/`   | - Yardımcı stil dosyaları                     |
| `/scss/pages/`    | - Sayfa stilleri (kullanım tercihinize göre)  |
| `/scss/main.scss` | - Tüm stillerin import edilmesi gereken dosya |
| `/app/css/`       | - Derlenmiş stil dosyaları (main.css)         |
| `/app/images/`    | - Sayfada kullanılan resimler, iconlar vb.    |
| `/app/js/`        | - Kullanılan javascript dosyaları             |
| `/app/index.html` | HTML Şablonu                                  |

## Gereksinimler

- node.js (https://nodejs.org/)
