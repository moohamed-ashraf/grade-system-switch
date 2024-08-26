let score = prompt("Enter your grade");
switch (true) {
  case score < 100 && score >= 85:
    alert("You got a A 🎉");
    break;
  case score < 85 && score >= 75:
    alert("You got a B 🎉");
    break;
  case score < 75 && score >= 65:
    alert("You got a C 📃");

    break;
  case score < 65 && score >= 50:
    alert("You got a D 👌");
    break;
  case score < 50 && score >= 0:
    alert("You got a F 😟");
    break;
  case score > 100 && score < 0:
    alert("Invalid score ❌");
    break;
  case isNaN(score):
    alert("Not a number ❌");

    break;
  case score == 100:
    alert("Perfect Score 🏆");
    break;
  default:
    alert("Try again later");
    break;
}
