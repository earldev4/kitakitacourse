import {Container, Row, Col} from "react-bootstrap"
import FaqComponent from "../components/FaqComponent"
const TermsAndAgreePage = () => {
  return (
    <>
      <div className="tea-page">
        <div className="tea min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center mb-2">Syarat dan Ketentuan</h1>
                <p>Dengan mengakses dan menggunakan situs web ini, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan berikut. Seluruh materi, termasuk kursus, modul, video, dan konten lainnya, hanya boleh digunakan untuk keperluan pribadi dan non-komersial. Dilarang keras untuk mendistribusikan, menggandakan, atau memodifikasi konten tanpa izin tertulis dari kami. Anda bertanggung jawab untuk menjaga kerahasiaan akun Anda serta aktivitas yang dilakukan melalui akun tersebut. Kami berhak memodifikasi konten, syarat, dan layanan kapan saja tanpa pemberitahuan terlebih dahulu. Penggunaan terus-menerus dari situs ini setelah perubahan dianggap sebagai persetujuan terhadap modifikasi tersebut. Pelanggaran terhadap syarat-syarat ini dapat mengakibatkan penghentian akses ke kursus dan layanan lainnya.</p>
              </Col>
            </Row>
            <Row className="py-1">
              <Col>
                <h4 className="fw-bold">1. Penggunaan Konten</h4>
                <p>Semua materi yang tersedia di situs, termasuk video, modul, dan materi pembelajaran, hanya boleh digunakan untuk keperluan pribadi dan tidak boleh didistribusikan, diubah, atau digunakan untuk tujuan komersial tanpa izin tertulis dari penyedia layanan.</p>
              </Col>
            </Row>
            <Row className="py-1">
              <Col>
                <h4 className="fw-bold">2. Kerahasiaan Akun</h4>
                <p>Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi login akun mereka. Segala aktivitas yang terjadi di bawah akun pengguna adalah tanggung jawab pengguna sepenuhnya.</p>
              </Col>
            </Row>
            <Row className="py-1">
              <Col>
                <h4 className="fw-bold">3. Perubahan Layanan</h4>
                <p>Kami berhak untuk mengubah, menambah, atau menghapus konten dan fitur yang tersedia di situs kapan saja tanpa pemberitahuan sebelumnya. Dengan terus menggunakan situs ini, Anda setuju untuk mematuhi setiap perubahan yang terjadi.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FaqComponent></FaqComponent>
    </>
  )
}

export default TermsAndAgreePage