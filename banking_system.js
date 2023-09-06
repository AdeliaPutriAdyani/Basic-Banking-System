class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        setTimeout(() => {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Deposit of ${amount} successfully processed. New balance: ${this.balance}`);
            } else {
                console.log("Deposit amount must be greater than 0.");
            }
        }, 2000); // Menunda eksekusi selama 2 detik untuk mensimulasikan operasi yang asynchronous.
    }

    withdraw(amount) {
        setTimeout(() => {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawal of ${amount} successfully processed. New balance: ${this.balance}`);
            } else if (amount > this.balance) {
                console.log("Insufficient balance for withdrawal.");
            } else {
                console.log("Withdrawal amount must be greater than 0.");
            }
        }, 2000); // Menunda eksekusi selama 2 detik untuk mensimulasikan operasi yang asynchronous.
    }
}

let saldo = 100000;
const account = new BankAccount(saldo);

function saldoAwal() {
    let saldoAwalMessage = "Saldo Awal = " + account.balance;
    alert(saldoAwalMessage);
    console.log(saldoAwalMessage);
}

function tambahSaldo() {
    let jumlah = parseFloat(prompt("Masukkan jumlah: "));
    let message = "Nominal yang ditambahkan = " + jumlah;
    console.log(message);
    if (jumlah > 0) {
        account.deposit(jumlah);
    } else {
        let gagal_tambah = "Maaf, nominal harus lebih besar dari 0";
        console.log(gagal_tambah);
    }
}

function kurangiSaldo() {
    let jumlah = parseFloat(prompt("Masukkan jumlah: "));
    let message = "Nominal yang dikurangi = " + jumlah;
    console.log(message);
    if (jumlah > 0) {
        account.withdraw(jumlah);
    } else {
        let gagal_kurangi = "Maaf, nominal harus lebih besar dari 0";
        console.log(gagal_kurangi);
    }
}

saldoAwal();

const aksi = prompt("Pilih aksi yang ingin dilakukan:\n1. Tambah Saldo\n2. Kurangi Saldo\nKetik 1/2");
if (aksi === "1") {
    tambahSaldo();
} else if (aksi === "2") {
    kurangiSaldo();
} else {
    let salah = "Pilihan yang Anda pilih salah!";
    console.log(salah);
    alert(salah);
}
