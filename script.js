const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContent = document.getElementById('dropdown-content');

dropdownBtn.addEventListener('click', () => {
  const isVisible = dropdownContent.style.display === 'block';
  dropdownContent.style.display = isVisible ? 'none' : 'block';
});

// Opsionale: Klik jashtë dropdown për të mbyllur
window.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
    dropdownContent.style.display = 'none';
  }
});

// === "Lexo më shumë" / "Mëso më shumë" toggle për blog dhe receta ===
document.querySelectorAll('.toggle-text-btn, .read-more').forEach(button => {
  button.addEventListener('click', () => {
    const fullText = button.previousElementSibling;
    if (fullText && fullText.classList.contains('full-text')) {
      const isVisible = fullText.style.display === 'block';
      fullText.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? 'Mëso më shumë' : 'Mbyll';
    }
  });
});
// === Fitnesi===
// Zgjidh seksionin e fitness-it
const fitnessSection = document.getElementById('fitness');
const fitnessReadMoreBtn = fitnessSection.querySelector('.read-more');
const moreTextDiv = fitnessSection.querySelector('.more-text');

fitnessReadMoreBtn.addEventListener('click', () => {
  if (moreTextDiv.style.display === 'none' || moreTextDiv.style.display === '') {
    moreTextDiv.style.display = 'block';
    fitnessReadMoreBtn.textContent = 'Mëso më pak';
  } else {
    moreTextDiv.style.display = 'none';
    fitnessReadMoreBtn.textContent = 'Mëso më shumë';
  }
});
// ===Kalkulo nevojat ditore===
  // Kjo do të sigurojë që kodi të ekzekutohet pasi DOM të jetë gati
  document.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weightCal');
    const heightInput = document.getElementById('heightCal');
    const activitySelect = document.getElementById('activityLevel');
    const genderSelect = document.getElementById('gender');
    const resultP = document.getElementById('calorieResult');
    const btn = document.getElementById('calculateCaloriesBtn');

    btn.addEventListener('click', () => {
      const age = parseInt(ageInput.value);
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);
      const activity = parseFloat(activitySelect.value);
      const gender = genderSelect.value;

      if (!age || !weight || !height) {
        resultP.textContent = 'Ju lutem plotësoni të gjitha fushat.';
        return;
      }

      if (gender === '') {
        resultP.textContent = 'Zgjidhni gjininë.';
        return;
      }

      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === 'female') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      const calories = bmr * activity;

      resultP.textContent = `Nevoja juaj ditore e kalorive është: ${calories.toFixed(0)} kcal.`;
    });
  });


// === Dieta popullore===
// Zgjidh butonin brenda seksionit dietSection
const dietSection = document.getElementById('dietSection');
const readMoreBtn = dietSection.querySelector('.read-more');
const detailsText = dietSection.querySelector('.details');

readMoreBtn.addEventListener('click', () => {
  if (detailsText.style.display === 'none' || detailsText.style.display === '') {
    detailsText.style.display = 'block';
    readMoreBtn.textContent = 'Mëso më pak';
  } else {
    detailsText.style.display = 'none';
    readMoreBtn.textContent = 'Mëso më shumë';
  }
});

// === Pije të Shëndetshme===
// Merr të gjithë butonat me klasën 'read-more'
const readMoreButtons = document.querySelectorAll('#healthyDrinks .read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Gjej paragrafin përkatës me tekstin më shumë brenda të njëjtit <li>
    const parentLi = button.closest('li');
    if (!parentLi) return; // nëse nuk ka li, ndalo
    
    // Mund të ketë dy variante të klasës p: 'more-text' ose 'more text' (vëre në kodin tënd)
    // Ne kapim njërën prej tyre:
    let moreText = parentLi.querySelector('.more-text');
    if (!moreText) {
      moreText = parentLi.querySelector('.more.text');
    }
    
    if (!moreText) return; // nëse nuk gjen tekstin, ndalo
    
    // Toggle shfaqjen e paragrafit
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'block';
      button.textContent = 'Mëso më pak';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Mëso më shumë';
    }
  });
});

// === Dieta për Gjendje Shëndetësore ===
  const healthDietsBtn = document.getElementById('healthDietsBtn');
  const detailsParagraph = document.querySelector('#healthDiets .details');

  healthDietsBtn.addEventListener('click', () => {
    if (detailsParagraph.style.display === 'none' || detailsParagraph.style.display === '') {
      detailsParagraph.style.display = 'block';
      healthDietsBtn.textContent = 'Mëso më pak';
    } else {
      detailsParagraph.style.display = 'none';
      healthDietsBtn.textContent = 'Mëso më shumë';
    }
  });
// === Vitmina dhe minerale ===
const vitaminsToggleBtn = document.getElementById('vitaminsToggleBtn');
  const vitaminsText = document.getElementById('vitaminsText');

  vitaminsToggleBtn.addEventListener('click', () => {
    if (vitaminsText.style.display === 'none' || vitaminsText.style.display === '') {
      vitaminsText.style.display = 'block';
      vitaminsToggleBtn.textContent = 'Mëso më pak';
    } else {
      vitaminsText.style.display = 'none';
      vitaminsToggleBtn.textContent = 'Mëso më shumë';
    }
  });

// === Tracker i Ujit ===
let waterAmount = 0;
const waterDisplay = document.getElementById('waterAmount');
document.getElementById('addWater').addEventListener('click', () => {
  waterAmount += 0.25;
  waterDisplay.textContent = waterAmount.toFixed(2);
});
document.getElementById('resetWater').addEventListener('click', () => {
  waterAmount = 0;
  waterDisplay.textContent = '0';
});
  
// === BMI Calculator ===
const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const calculateBtn = document.getElementById('calculateBtn');
  const bmiResult = document.getElementById('bmi-result');

  // Shtojmë event listener për klikimin e butonit
  calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    // Kontrollojmë nëse janë të plota dhe valide
    if (!weight || !heightCm) {
      bmiResult.textContent = 'Ju lutem shkruani peshën dhe gjatësinë të sakta.';
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);

    let category = '';
    if (bmi < 18.5) {
      category = 'Nën peshë';
    } else if (bmi < 25) {
      category = 'Peshë normale';
    } else if (bmi < 30) {
      category = 'Mbipeshë';
    } else {
      category = 'Obezitet';
    }

    bmiResult.textContent = `BMI juaj është: ${bmi.toFixed(2)} (${category})`;
  });

// === Zgjedhja e planit ushqimor për çdo ditë ===
  const selectButtons = document.querySelectorAll('#weeklyMealPlan .select-day');

  selectButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hiq stilin nga të gjithë butonat
      selectButtons.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.textContent = 'Select'; // Teksti origjinal në buton
      });

      // Vendos stilin për butonin që u klikua
      button.style.backgroundColor = 'green';
      button.style.color = 'white';
      button.textContent = 'SELECTED';
    });
  });
// === Fshirja e një regjistrimi në historinë e dietës ===
document.querySelectorAll('.delete-entry').forEach(button => {
  button.addEventListener('click', () => {
    const entry = button.closest('.diet-entry');
    if (entry) entry.remove();
  });
});

// === Fshirja e të gjitha regjistrimeve në historinë e dietës ===
const clearBtn = document.getElementById('clearDietHistory');
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    const entries = document.querySelector('.diet-entries');
    if (entries) entries.innerHTML = '';
  });
}

// === FAQ - Pyetje të shpeshta (hap/mbyll përgjigjet) ===
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer && answer.classList.contains('faq-answer')) {
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
    }
  });
});
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const fullText = button.nextElementSibling;
    if (fullText.style.display === 'none' || fullText.style.display === '') {
      fullText.style.display = 'block';
      button.textContent = 'Lexo më pak...';
    } else {
      fullText.style.display = 'none';
      button.textContent = 'Lexo më shumë...';
    }
  });
});
