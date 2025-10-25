   function openForm() {
    document.getElementById("buyForm").style.display = "flex";
  }

  function closeForm() {
    document.getElementById("buyForm").style.display = "none";
  }

  function updatePrice() {
    const project = document.getElementById("projectSelect").value;
    const option = document.getElementById("optionSelect").value;
    const priceField = document.getElementById("price");
    let price = "";

    // Define prices for each project
    const prices = {
      "Calculator": { "Only Project": 200, "Project with Documents": 250 },
      "Digital Clock": { "Only Project": 200, "Project with Documents": 250 },
      "Gamil Validation": { "Only Project": 200, "Project with Documents": 250 },
      "Date Difference": { "Only Project": 200, "Project with Documents": 250 },
      "Gallery": { "Only Project": 200, "Project with Documents": 250 },
      "Dice Roller": { "Only Project": 200, "Project with Documents": 250 },
      // "Project 7": { "Only Project": 700, "Project with Documents": 750 },
      // "Project 8": { "Only Project": 800, "Project with Documents": 850 },
      // "Project 9": { "Only Project": 900, "Project with Documents": 950 },
      // "Project 10": { "Only Project": 1000, "Project with Documents": 1050 }
    };

    // Update price based on selection
    if (project && option && prices[project]) {
      price = prices[project][option] || "";
    }

    priceField.value = price ? "₹" + price : "";
  }

  document.getElementById("purchaseForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const price = document.getElementById("price").value;
    alert(`✅ Order placed successfully! We will reach out to you soon.\nPrice: ${price}`);
    closeForm();
    this.reset();
    document.getElementById("price").value = "";
  });
    