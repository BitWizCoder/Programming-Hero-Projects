const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`,
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const phoneContainer = document.getElementById("phone-container");

const displayPhones = (phones) => {
  // display show all button if there are more than 9 phones
  const showAll = document.getElementById("show-all");
  if (phones.length > 9) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }

  // display only first 9 phones
  phones = phones.slice(0, 9);

  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.innerHTML = `
    <div class="border flex flex-col items-center max-w-xs px-4 py-5 gap-2 rounded-md text-[#403F3F]">
    <img src="${phone.image}" alt="" />
    <h2 class="text-2xl font-bold">${phone.phone_name}</h2>
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

    phoneContainer.appendChild(phoneCard);
  });
};

// Handle Search
const handleSearch = () => {
  phoneContainer.innerHTML = "";
  const searchInput = document.getElementById("seacrch-input");
  const searchText = searchInput.value;
  loadPhone(searchText);

  searchInput.value = "";
};

// Handle Show all
const handleShowAll = () => {
  handleSearch();
};
