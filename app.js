const express = require("express");
const app = express(); // Membuat variabel dengan isinya express
const port = 3000;

// Set template Engine
app.set("views", "./views"); // Mendeklarasi views
app.set("view engine", "ejs"); // Mengset template ejs

// menggunakan endpoint get dengan megirim dari parameter
// Menerima 2 parameter req dan res
// Membuat row function yang akan dikirimkan, yang didapat dari params
// Untuk menjalankan atau mencobanya tambahkan http://localhost:3000/yang mau dicoba ketikan setelah slash
app.get("/:name", (req, res) => res.send(`Nama Aku, ${req.params.name}`));

// endpoint get
app.get("/", (req, res) => {
  // Membuat variabel buah
  const hobi = [
    // Membuat array of object
    { name: "Baca Buku" },
    { name: "Belajar" },
    { name: "Ngoding" },
  ];
  res.render("index", {
    name: "Rahmat Subandi, S.kom.",
    umur: "20",
    cita: "Expert Progammer",
    hobi,
  });
});
// mengirim parameter nama
app.get("/:name", (req, res) => res.send(`Nama Aku : ${req.params.name}`));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
