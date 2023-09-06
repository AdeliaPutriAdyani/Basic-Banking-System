const BankAccount = require('./banking_system');

let saldo = 100000;
const account = new BankAccount(saldo);

function saldoAwal() {
  let saldoAwalMessage = "Saldo Awal = " + saldo;
  alert(saldoAwalMessage);
  console.log(saldoAwalMessage);
}

function tambahSaldo() {
  let jumlah = parseFloat(prompt("Masukkan jumlah: "));
  let message = "Nominal yang ditambahkan = " + jumlah
  console.log(message)
  if (jumlah > 0) {
    saldo += jumlah;
    let berhasil_tambah = "SALDO ANDA BERHASIL DITAMBAH\nSaldo Baru = " + saldo;
    alert(berhasil_tambah);
    console.log(berhasil_tambah);
  } else {
    let gagal_tambah = "Maaf, nominal harus lebih besar dari 0";
    console.log(gagal_tambah);
  }
}

function kurangiSaldo() {
  let jumlah = parseFloat(prompt("Masukkan jumlah: "));
  let message = "Nominal yang dikurangi = " + jumlah
  console.log(message)
  if (saldo < jumlah) {
    let gagal_kurangi = "SALDO ANDA KURANG!"
    alert(gagal_kurangi)
    console.log(gagal_kurangi)
  } else {
    saldo -= jumlah;
    let berhasil_kurangi = "SALDO ANDA BERHASIL DIKURANGI\nSaldo Baru = " + saldo;
    alert(berhasil_kurangi);
    console.log(berhasil_kurangi);
  }
}

saldoAwal();

const aksi = prompt("pilih aksih yang ingin di lakukan \n 1. tambah 2. kurangi \n Ketik 1/2");
if (aksi === "1") {
  tambahSaldo();
} else if (aksi === "2") {
  kurangiSaldo();
} else {
  let salah = "Pilihan yang anda pilih salah!"
  console.log(salah);
  alert(salah);
}