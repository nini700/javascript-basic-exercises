// 1. შექმენით ცვლადები:
// - მოსწავლის ასაკი
// - მასწავლებლის ასაკი
// - გამოთვალეთ რამდენი წლით არის მასწავლებელი უფროსი
let studentAge = 15;
let teacherAge = 40;
let ageDifference = teacherAge - studentAge;
console.log("Age difference:", ageDifference);

// 2. შექმენით ცვლადები:
// - ქვეყანა (string ტიპის)
// - ქალაქი (string ტიპის)
// - მისამართი (string ტიპის)
// - გააერთიანეთ სამივე ერთ ცვლადში
let country = "UK";
let city = "London";
let address = "King's Road 44";
let fullAddress = country + ", " + city + ", " + address;
console.log("Full address:", fullAddress);

// 3. შექმენით ორი ცვლადი:
// - product_price (პროდუქტის ფასი)
// - discount_percentage (ფასდაკლების პროცენტი)
// - გამოთვალეთ ფასდაკლების შემდეგ ფასი
let product_price = 100;
let discount_percentage = 20;
let final_price = product_price * (1 - discount_percentage / 100);
console.log("Final price:", final_price);

// 4. შექმენით მასივი gadgets სამი ტექნიკის სახელით
// - დაამატეთ ორი ახალი ტექნიკა ბოლოში
// - წაშალეთ პირველი
// - დაბეჭდეთ ბოლო ელემენტი
let gadgets = ["phone", "laptop", "tv"];
gadgets.push("smartwatch", "camera");
gadgets.shift();
console.log("Last item:", gadgets[gadgets.length - 1]);

// 5. შექმენით ცვლადი examScore ქულებისთვის
// დაწერეთ კოდი რომელიც:
// - თუ examScore 95-ზე მეტია დაბეჭდავს "A+"
// - თუ examScore 90-ზე მეტია დაბეჭდავს "A"
// - თუ examScore 80-ზე მეტია დაბეჭდავს "B"
// - სხვა შემთხვევაში დაბეჭდავს "C"
let examScore = 92;
if (examScore > 95) {
    console.log("A+");
} else if (examScore > 90) {
    console.log("A");
} else if (examScore > 80) {
    console.log("B");
} else {
    console.log("C");
}

// 6. შექმენით ცვლადები:
// - hasHomework (გაქვთ თუ არა საშინაო დავალება - true/false)
// - isTired (დაღლილი ხართ თუ არა - true/false)
// დაბეჭდეთ "უნდა ვისწავლო" თუ:
// - გაქვთ საშინაო დავალება და არ ხართ დაღლილი
let hasHomework = true;
let isTired = false;
if (hasHomework && !isTired) {
    console.log("Need to study");
}

// 7. შექმენით მასივი vegetables ორი ბოსტნეულით
// - დაამატეთ ერთი ბოსტნეული დასაწყისში
// - დაამატეთ ერთი ბოსტნეული ბოლოში
// - წაშალეთ ბოლოდან
// - დაბეჭდეთ მასივის ზომა
let vegetables = ["carrot", "potato"];
vegetables.unshift("tomato");
vegetables.push("cucumber");
vegetables.pop();
console.log("Array length:", vegetables.length);

// 8. შექმენით ცვლადები:
// - isHungry (მშიერი ხართ თუ არა - true/false)
// - hasFood (საჭმელი გაქვთ თუ არა - true/false)
// - hasMoney (ფული გაქვთ თუ არა - true/false)
// დაბეჭდეთ "შეგიძლიათ ჭამა" თუ:
// - მშიერი ხართ და გაქვთ საჭმელი ან ფული
let isHungry = true;
let hasFood = false;
let hasMoney = true;
if (isHungry && (hasFood || hasMoney)) {
    console.log("Can eat");
}

// 9. შექმენით ცვლადი playerHealth სიცოცხლის ქულებისთვის
// დაწერეთ კოდი რომელიც:
// - თუ playerHealth 100-ია დაბეჭდავს "სრული სიცოცხლე"
// - თუ playerHealth 50-ზე მეტია დაბეჭდავს "კარგი მდგომარეობა"
// - თუ playerHealth 20-ზე მეტია დაბეჭდავს "დაბალი სიცოცხლე"
// - სხვა შემთხვევაში დაბეჭდავს "კრიტიკული მდგომარეობა"
let playerHealth = 75;
if (playerHealth === 100) {
    console.log("Full health");
} else if (playerHealth > 50) {
    console.log("Good condition");
} else if (playerHealth > 20) {
    console.log("Low health");
} else {
    console.log("Critical condition");
}

// 10. შექმენით ცვლადები:
// - triangle_base (სამკუთხედის ფუძე)
// - triangle_height (სამკუთხედის სიმაღლე)
// - გამოთვალეთ ფართობი და შეინახეთ მესამე ცვლადში

let triangle_base = 10;
let triangle_height = 5;
let triangle_area = (triangle_base * triangle_height) / 2;
console.log("Triangle area:", triangle_area);

// 11. შექმენით მასივი books სამი წიგნის სახელით
// - დაამატეთ ორი წიგნი დასაწყისში
// - წაშალეთ ბოლო წიგნი
// - დაბეჭდეთ პირველი წიგნი
let books = ["HarryPotter", "LordOfTheRings", "Flowers for Algernon"];
books.unshift("NewHarryPotter", "NewLordOfTheRings");
books.pop();
console.log("First book:", books[0]);

// 12. შექმენით ცვლადები:
// - isLoggedIn (დალოგინებული ხართ თუ არა - true/false)
// - isPremium (პრემიუმ მომხმარებელი ხართ თუ არა - true/false)
// დაბეჭდეთ "შეგიძლიათ ყურება" თუ:
// - დალოგინებული ხართ და ხართ პრემიუმ მომხმარებელი
let isLoggedIn = true;
let isPremium = true;
if (isLoggedIn && isPremium) {
    console.log("Can watch");
}

// 13. შექმენით ცვლადი gameLevel რიცხვისთვის
// დაწერეთ კოდი რომელიც:
// - თუ gameLevel 10-ზე მეტია დაბეჭდავს "გამოცდილი"
// - თუ gameLevel 5-ზე მეტია დაბეჭდავს "საშუალო"
// - სხვა შემთხვევაში დაბეჭდავს "დამწყები"
let gameLevel = 7;
if (gameLevel > 10) {
    console.log("Expert");
} else if (gameLevel > 5) {
    console.log("Intermediate");
} else {
    console.log("Beginner");
}
// 14. შექმენით ცვლადები:
// - hours (ნამუშევარი საათები)
// - hourlyRate (საათობრივი ანაზღაურება)
// - გამოთვალეთ ხელფასი და შეინახეთ მესამე ცვლადში
let hours = 44;
let hourlyRate = 10;
let salary = hours * hourlyRate;
console.log("Salary:", salary);

// 15. შექმენით მასივი planets ორი პლანეტის სახელით
// - დაამატეთ ერთი პლანეტა ბოლოში
// - დაამატეთ ერთი პლანეტა დასაწყისში
// - წაშალეთ მეორე პლანეტა
// - დაბეჭდეთ მასივის სიგრძე
let planets = ["Mars", "Venus"];
planets.push("Jupiter");
planets.unshift("Mercury");
planets.splice(1, 1);
console.log("Array length:", planets.length);

// 16. შექმენით ცვლადები:
// - hasPassport (პასპორტი გაქვთ თუ არა - true/false)
// - hasTicket (ბილეთი გაქვთ თუ არა - true/false)
// დაბეჭდეთ "შეგიძლიათ მოგზაურობა" თუ:
// - გაქვთ პასპორტი და ბილეთი

let hasPassport = true;
let hasTicket = true;
if (hasPassport && hasTicket) {
    console.log("Can travel");
}

// 17. შექმენით ცვლადები:
// - year (წელი)
// დაწერეთ კოდი რომელიც დაბეჭდავს "ნაკიანი" თუ:
// - წელი იყოფა 4-ზე და არ იყოფა 100-ზე
// - ან იყოფა 400-ზე
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
}

// 18. შექმენით ცვლადები:
// - radius (სფეროს რადიუსი)
// - pi (3.14)
// - გამოთვალეთ სფეროს მოცულობა და შეინახეთ მესამე ცვლადში
let radius = 5;
let pi = 3.14;
let moculoba = (4/3) * pi * radius * radius * radius;
console.log("Sphere moculoba:", moculoba);

// 19. შექმენით მასივი animals სამი ცხოველის სახელით
// - დაამატეთ ორი ცხოველი ბოლოში
// - წაშალეთ პირველი ცხოველი
// - შეცვალეთ მეორე ცხოველი სხვა ცხოველით
// - დაბეჭდეთ მთელი მასივი
let animals = ["Lion", "Tiger", "Bear"];
animals.push("Elephant", "Giraffe");
animals.shift();
animals[1] = "Monkey";
console.log("Animals:", animals);

// 20. შექმენით ცვლადები:
// - speed (სიჩქარე კმ/სთ-ში)
// - distance (მანძილი კილომეტრებში)
// - გამოთვალეთ მგზავრობის დრო საათებში და შეინახეთ მესამე ცვლადში

let speed = 44;
let distance = 120;
let time = distance / speed;
console.log("Travel time:", time);

// 21. შექმენით ცვლადები:
// - isBirthday (დაბადების დღეა თუ არა - true/false)
// - hasGift (საჩუქარი გაქვთ თუ არა - true/false)
// - hasCake (ტორტი გაქვთ თუ არა - true/false)
// დაბეჭდეთ "შეგვიძლია აღნიშვნა" თუ:
// - დაბადების დღეა და გვაქვს ტორტი ან საჩუქარი
let isBirthday = true;
let hasGift = false;
let hasCake = true;
if (isBirthday && (hasGift || hasCake)) {
    console.log("We can celebrate");
}

// 22. შექმენით ცვლადები:
// - phonePrice (ტელეფონის ფასი)
// - bankBalance (ანგარიშზე თანხა)
// დაწერეთ კოდი რომელიც:
// - თუ თანხა საკმარისია დაბეჭდავს "შეგიძლიათ ყიდვა"
// - თუ არა, დაბეჭდავს რამდენი თანხა გაკლიათ
let phonePrice = 1000;
let bankBalance = 400;
if (bankBalance >= phonePrice) {
    console.log("Can buy");
} else {
    console.log("Short by:", phonePrice - bankBalance);
}

// 23. შექმენით მასივი songs სამი სიმღერის სახელით
// - დაამატეთ ახალი სიმღერა დასაწყისში
// - წაშალეთ ბოლო სიმღერა
// - შეცვალეთ პირველი სიმღერა სხვა სიმღერით
// - დაბეჭდეთ მასივის ზომა
let songs = ["StairwayToHeaven", "HotelCalifornia", "KillerQueen"];
songs.unshift("SummertimeSadness");
songs.pop();
songs[0] = "UpdatedSong";
console.log("Array size:", songs.length);

// 24. შექმენით ცვლადები:
// - isStudent (სტუდენტი ხართ თუ არა - true/false)
// - hasCard (სტუდენტური ბარათი გაქვთ - true/false)
// დაბეჭდეთ "გაქვთ ფასდაკლება" თუ:
// - ხართ სტუდენტი და გაქვთ სტუდენტური ბარათი
let isStudent = true;
let hasCard = true;
if (isStudent && hasCard) {
    console.log("Has discount");
}

// 25. შექმენით ცვლადები:
// - totalMinutes (წუთების რაოდენობა)
// გამოთვალეთ და შეინახეთ ახალ ცვლადებში:
// - საათების რაოდენობა
// - დარჩენილი წუთების რაოდენობა
let totalMinutes = 144;
let hoursFromMinutes = Math.floor(totalMinutes / 60);
let remainingMinutes = totalMinutes % 60;
console.log("Hours:", hoursFromMinutes, "Minutes:", remainingMinutes);

// 26. შექმენით მასივი drinks სამი სასმელის სახელით
// - დაამატეთ ორი სასმელი ბოლოში
// - წაშალეთ პირველი ორი სასმელი
// - დაბეჭდეთ მასივის ახალი შემადგენლობა
let drinks = ["Cola", "Fanta", "Sprite"];
drinks.push("Water", "Tea");
drinks.splice(0, 2);
console.log("Drinks:", drinks);

// 27. შექმენით ცვლადები:
// - grade1 (პირველი ნიშანი)
// - grade2 (მეორე ნიშანი)
// - grade3 (მესამე ნიშანი)
// - გამოთვალეთ საშუალო ქულა და შეინახეთ მეოთხე ცვლადში
// დაბეჭდეთ "ჩააბარე" თუ საშუალო მეტია 6-ზე
let grade1 = 7;
let grade2 = 10;
let grade3 = 6;
let averageGrade = (grade1 + grade2 + grade3) / 3;
if (averageGrade > 6) {
    console.log("Passed");
}

// 28. შექმენით ცვლადები:
// - day (დღე კვირაში 1-დან 7-მდე)
// დაწერეთ კოდი რომელიც:
// - თუ არის 1-5 დაბეჭდავს "სამუშაო დღე"
// - თუ არის 6-7 დაბეჭდავს "დასვენების დღე"
let day = 3;
if (day >= 1 && day <= 5) {
    console.log("Workday");
} else if (day >= 6 && day <= 7) {
    console.log("Weekend");
}

// 29. შექმენით ცვლადები:
// - isWinter (ზამთარია თუ არა - true/false)
// - temperature (ტემპერატურა)
// დაბეჭდეთ "თოვლი მოვა" თუ:
// - ზამთარია და ტემპერატურა 0-ზე დაბალია
let isWinter = true;
let temperature = -2;
if (isWinter && temperature < 0) {
    console.log("Snow is expected");
}

// 30. შექმენით მასივი cities სამი ქალაქის სახელით
// - დაამატეთ ორი ქალაქი დასაწყისში
// - წაშალეთ ბოლო ქალაქი
// - დაბეჭდეთ მეორე ქალაქი
let cities = ["New York", "London", "Tbilisi"];
cities.unshift("Tokyo", "Oslo");
cities.pop();
console.log("Second city:", cities[1]);

// 31. შექმენით ცვლადები:
// - hasLicense (მართვის მოწმობა გაქვთ თუ არა - true/false)
// - hasInsurance (დაზღვევა გაქვთ თუ არა - true/false)
// - hasRegistration (მანქანა არის თუ არა გატარებული - true/false)
// დაბეჭდეთ "შეგიძლიათ ტარება" თუ:
// - სამივე პირობა სრულდება
let hasLicense = true;
let hasInsurance = true;
let hasRegistration = true;
if (hasLicense && hasInsurance && hasRegistration) {
    console.log("Can drive");
}

// 32. შექმენით ცვლადები:
// - waterAmount (წყლის რაოდენობა მლ)
// გამოთვალეთ და შეინახეთ:
// - რამდენი ლიტრია (ახალ ცვლადში)
// - რამდენი მილილიტრი რჩება (ახალ ცვლადში)
let waterAmount = 2500;
let liters = Math.floor(waterAmount / 1000);
let milliliters = waterAmount % 1000;
console.log("Liters:", liters, "Milliliters:", milliliters);

// 33. შექმენით მასივი sports ოთხი სპორტის სახეობით
// - წაშალეთ ბოლო ორი
// - დაამატეთ სამი ახალი დასაწყისში
// - დაბეჭდეთ მესამე სპორტის სახეობა
let sports = ["Football", "Chess", "Tennis", "Golf"];
sports.splice(-2);
sports.unshift("Swimming", "Boxing", "Rugby");
console.log("Third sport:", sports[2]);

// 34. შექმენით ცვლადები:
// - player1Score (პირველი მოთამაშის ქულა)
// - player2Score (მეორე მოთამაშის ქულა)
// დაბეჭდეთ "player 1 wins" ან "player 2 wins" ან "draw"
// იმის მიხედვით თუ ვის აქვს მეტი ქულა
let player1Score = 10;
let player2Score = 4;
if (player1Score > player2Score) {
    console.log("Player 1 wins");
} else if (player2Score > player1Score) {
    console.log("Player 2 wins");
} else {
    console.log("Draw");
}

// 35. შექმენით ცვლადები:
// - hasFever (სიცხე გაქვთ თუ არა - true/false)
// - hasCough (ხველა გაქვთ თუ არა - true/false)
// დაბეჭდეთ "უნდა დარჩეთ სახლში" თუ:
// - გაქვთ სიცხე ან ხველა
let hasFever = true;
let hasCough = false;
if (hasFever || hasCough) {
    console.log("Stay home");
}

// 36. შექმენით მასივი desserts სამი დესერტის სახელით
// - დაამატეთ ერთი დესერტი თავში
// - დაამატეთ ერთი დესერტი ბოლოში
// - წაშალეთ მეორე დესერტი
// - დაბეჭდეთ მთლიანი მასივი
let desserts = ["Cake", "Ice Cream", "Chocolate"];
desserts.unshift("Cookies");
desserts.push("Pudding");
desserts.splice(1, 1);
console.log("Desserts:", desserts);

// 37. შექმენით ცვლადი age და სხვა ცვლადი price
// დაწერეთ კოდი რომელიც ფასს შეამცირებს:
// - 50%-ით თუ ასაკი ნაკლებია 6-ზე
// - 20%-ით თუ ასაკი ნაკლებია 18-ზე
// შედეგი შეინახეთ ახალ ცვლადში
let customerAge = 14;
let originalPrice = 100;
let discountedPrice;
if (customerAge < 6) {
    discountedPrice = originalPrice * 0.5;
} else if (customerAge < 18) {
    discountedPrice = originalPrice * 0.8;
} else {
    discountedPrice = originalPrice;
}

// 38. შექმენით ცვლადები:
// - motherAge (დედის ასაკი)
// - fatherAge (მამის ასაკი)
// - childAge (შვილის ასაკი)
// დაბეჭდეთ "შესაძლებელია" თუ:
// - მშობლები მინიმუმ 20 წლით უფროსები არიან შვილზე
let motherAge = 44;
let fatherAge = 48;
let childAge = 20;
if (motherAge - childAge >= 20 && fatherAge - childAge >= 20) {
    console.log("Possible");
}

// 39. შექმენით მასივი hobbies ხუთი ჰობით
// - წაშალეთ მესამე ჰობი
// - ჩაამატეთ ახალი ჰობი მის ადგილას
// - დაბეჭდეთ მთლიანი მასივი
let hobbies = ["Reading", "Gaming", "Swimming", "Chess", "Coding"];
hobbies[2] = "Sleeping";
console.log("Hobbies:", hobbies);

// 40. შექმენით ცვლადები:
// - storage (მეხსიერების მოცულობა GB)
// - fileSize (ფაილის ზომა GB)
// დაბეჭდეთ "საკმარისი სივრცეა" ან "არ არის საკმარისი სივრცე"
// და დაბეჭდეთ რამდენი გიგაბაიტი რჩება ან აკლია
let storage = 500;
let fileSize = 100;
if (storage >= fileSize) {
    console.log("Sufficient space");
    console.log("Remaining:", storage - fileSize, "GB");
} else {
    console.log("Insufficient space");
    console.log("Needed:", fileSize - storage, "GB");
}

// 41. შექმენით ცვლადები:
// - height (სიმაღლე სანტიმეტრებში)
// გამოთვალეთ და შეინახეთ:
// - რამდენი მეტრია (ახალ ცვლადში)
// - რამდენი სანტიმეტრი რჩება (ახალ ცვლადში)
let heightInCm = 175;
let meters = Math.floor(heightInCm / 100);
let centimeters = heightInCm % 100;
console.log("Meters:", meters, "Centimeters:", centimeters);

// 42. შექმენით მასივი months სამი თვის სახელით
// - დაამატეთ ორი თვე დასაწყისში
// - დაამატეთ ორი თვე ბოლოში
// - წაშალეთ პირველი და ბოლო თვე
// - დაბეჭდეთ მასივის ზომა
let months = ["March", "April", "May"];
months.unshift("January", "February");
months.push("June", "July");
months.shift();
months.pop();
console.log("Array length:", months.length);

// 43. შექმენით ცვლადები:
// - isMorning (დილაა თუ არა - true/false)
// - isEvening (საღამოა თუ არა - true/false)
// დაბეჭდეთ:
// - "დილა მშვიდობისა" თუ დილაა
// - "საღამო მშვიდობისა" თუ საღამოა
// - "გამარჯობა" სხვა შემთხვევაში
let isMorning = true;
let isEvening = false;
if (isMorning) {
    console.log("Good morning");
} else if (isEvening) {
    console.log("Good evening");
} else {
    console.log("Hello");
}

// 44. შექმენით ცვლადები:
// - originalPrice (საწყისი ფასი)
// - discountPercent (ფასდაკლების პროცენტი)
// - გამოთვალეთ საბოლოო ფასი
// - დაბეჭდეთ "გაყიდვა წამგებიანია" თუ ფასი ნაკლებია 10-ზე
let originalAmount = 100;
let discountPercent = 20;
let finalAmount = originalAmount * (1 - discountPercent / 100);
if (finalAmount < 10) {
    console.log("You Lost On Sale");
}

// 45. შექმენით მასივი numbers სამი რიცხვით
// - დაამატეთ ორი რიცხვი ბოლოში
// - წაშალეთ პირველი რიცხვი
// - შეცვალეთ მეორე რიცხვი 0-ით
// - დაბეჭდეთ მთლიანი მასივი
let numbers = [1, 2, 3];
numbers.push(4, 5);
numbers.shift();
numbers[1] = 0;
console.log("Numbers:", numbers);

// 46. შექმენით ცვლადები:
// - carSpeed (მანქანის სიჩქარე)
// დაბეჭდეთ:
// - "ძალიან ჩქარა" თუ 120-ზე მეტია
// - "ჩქარა" თუ 80-ზე მეტია
// - "ნორმალური" თუ 60-ზე მეტია
// - "ნელა" სხვა შემთხვევაში
let carSpeed = 40;
if (carSpeed > 120) {
    console.log("Very fast");
} else if (carSpeed > 80) {
    console.log("Fast");
} else if (carSpeed > 60) {
    console.log("Normal");
} else {
    console.log("Slow");
}

// 47. შექმენით ცვლადები:
// - hasInternet (ინტერნეტი გაქვთ თუ არა - true/false)
// - hasPower (დენი გაქვთ თუ არა - true/false)
// - hasDeadline (ვადა გაქვთ თუ არა - true/false)
// დაბეჭდეთ "შეძლებთ მუშაობას" თუ:
// - გაქვთ ინტერნეტი და დენი, ან არ გაქვთ ვადა
let hasInternet = true;
let hasPower = true;
let hasDeadline = false;
if ((hasInternet && hasPower) || !hasDeadline) {
    console.log("You can work");
}

// 48. შექმენით მასივი tasks სამი დავალების სახელით
// - დაამატეთ ახალი დავალება ბოლოში
// - წაშალეთ პირველი დავალება
// - შეცვალეთ მეორე დავალება სხვა დავალებით
// - დაბეჭდეთ ყველა დავალება
let tasks = ["Cleaning", "Homework", "Cooking"];
tasks.push("Shopping");
tasks.shift();
tasks[1] = "UpdatedTask";
console.log("All tasks:", tasks);

// 49. შექმენით ცვლადები:
// - weight (წონა კილოგრამებში)
// - height (სიმაღლე მეტრებში)
// გამოთვალეთ BMI (weight / (height * height))
// დაბეჭდეთ "ნორმალური" თუ BMI არის 18.5-დან 25-მდე
let weightKg = 40;
let heightM = 1.46;
let bmi = weightKg / (heightM * heightM);
if (bmi >= 18.5 && bmi <= 25) {
    console.log("Normal");
}

// 50. შექმენით ცვლადები:
// - batteryLevel (ბატარეის დონე 0-100)
// - isCharging (იტენება თუ არა - true/false)
// დაბეჭდეთ:
// - "კრიტიკული" თუ ნაკლებია 10-ზე და არ იტენება
// - "დაბალი" თუ ნაკლებია 30-ზე და არ იტენება
// - "ნორმალური" სხვა შემთხვევაში
let batteryLevel = 40;
let isCharging = false;

if (batteryLevel < 10 && !isCharging) {
    console.log("Critical");
} else if (batteryLevel < 30 && !isCharging) {
    console.log("Low");
} else {
    console.log("Normal");
}