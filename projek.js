const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Tentukan fungsi untuk menghitung berdasarkan tombol yang diklik.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //Jika output memiliki '%',terganti dengan '/100' sebelum mengevaluasi.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //Jika tombol DEL diklik, maka akan menghapus karakte akhir pada output.
    output = output.toString().slice(0, -1);
  } else {
    //Jika output kosong dan tombol adalah SpecialChars, maka kembalikan
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Tambahkan event listener ke tombol, panggil count() saat diklik.
buttons.forEach((button) => {
  /*Tombol klik pendengar memanggil menghitung() dengan 
  nilai dataset sebagai argumen*/
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});