let saldo = 100000;

class BankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    saldoAwal() {
        let saldoAwalMessage = "Saldo Awal = Rp" + this.saldo;
        alert(saldoAwalMessage);
        console.log(saldoAwalMessage);
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0) {
                    this.saldo += amount;
                    resolve(`Deposit dengan Rp${amount} Berhasil diperbarui. \nSaldo Anda : Rp${this.saldo}`)
                } else {
                    reject(new Error ('Deposit harus lebih besar dari 0'));
                }
            }, 2000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0 && amount <= this.saldo) {
                    this.saldo -= amount;
                    resolve(`Penarikan sejumlah ${amount} berhasil. \nSaldo baru: Rp${this.saldo}`)
                } else if (amount > this.saldo) {
                    reject(new Error ('Saldo Anda tidak mencukupi untuk penarikan !'));
                } else {
                    reject(new Error ('Deposit harus lebih besar dari 0'));
                }
            }, 2000);
        });
    }
}

const account = new BankAccount(saldo);
account.saldoAwal();

const aksi = prompt("Pilih aksi yang ingin dilakukan:\n1. Tambah Saldo/Deposit\n2. Kurangi Saldo/Withdraw\nKetik 1/2");

if (aksi === "1") {
    let amount = parseFloat(prompt("Masukkan jumlah saldo/deposit: "));
    let pesan = `PROSES SEDANG BERLANGSUNG\nMemasukan Deposit Rp${amount}`
    console.log(pesan)
    alert(pesan)
    account.deposit(amount)
        .then(resolve => {
            alert(resolve);
            console.log(resolve)
        })
        .catch(error => {
            alert(error)
            console.error(error.message);
        });
} else if (aksi === "2") {
    let amount = parseFloat(prompt("Masukkan jumlah penarikan/withdraw: "));
    let pesan = `PROSES SEDANG BERLANGSUNG\nMenarik saldo Rp${amount}`
    console.log(pesan)
    alert(pesan)
    account.withdraw(amount)
        .then(resolve => {
            alert(resolve);
            console.log(resolve)
        })
        .catch(error => {
            alert(error)
            console.error(error.message);
        });
} else {
    const error = new Error("Pilihan yang Anda pilih salah!");
    console.error(error.message);
    alert(error)
}
