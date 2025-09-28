alert("Hello world");

// Bikin array yang isinya nilai boolean
    let data = [true, false, true, true, false];

    // Ambil elemen div dengan id "hasil"
    let hasilDiv = document.getElementById("hasil");

    // Gunakan looping for untuk ngecek tiap nilai di array
    for (let i = 0; i < data.length; i++) {
      // Kalau nilainya true
      if (data[i] === true) {
        hasilDiv.innerHTML += "Index " + i + ": ✅ TRUE <br>";
      } 
      // Kalau nilainya false
      else {
        hasilDiv.innerHTML += "Index " + i + ": ❌ FALSE <br>";
      }
    }

    // Biar jelas juga kita coba looping lain, misal forEach
    data.forEach((nilai, index) => {
      console.log("Index " + index + " = " + nilai);
    });