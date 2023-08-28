const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const phoneContainer = document.getElementById("phone-container");

const displayPhones = (phones) => {
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.innerHTML = `
    <div class="border flex flex-col items-center max-w-xs px-4 py-5 gap-2 rounded-md text-[#403F3F]">
    <img src="${phone.image}" alt="" />
    <h2 class="text-2xl font-bold">Iphone 13 Pro Max</h2>
    <p class="text-[#706F6F]">
      There are many variations of passages of available, but the majority
      have suffered
    </p>
    <p class="text-2xl font-bold">$999</p>
    <button class="btn bg-[#0D6EFD] hover:bg-[#0d6dfdda] text-white my-2 text-lg font-semibold">
      Show Details
    </button>
  </div>
    `;

    phoneContainer.appendChild(phoneCard)
  });
};

loadPhone();
