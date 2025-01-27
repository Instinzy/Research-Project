// Lesson Array (store lessons for viewing)
let lessons = [
    {
        title: 'Introduction to HTML',
        description: 'HTML is the standard markup language for documents designed to be displayed in a web browser.'
    }
];

// Display Lessons List
function displayLessons() {
    const lessonsContainer = document.getElementById('lessons');
    lessonsContainer.innerHTML = '';

    lessons.forEach((lesson, index) => {
        const lessonElement = document.createElement('li');
        lessonElement.innerHTML = <strong>${lesson.title}</strong><p>${lesson.description}</p><button onclick="viewLesson(${index})">View Lesson</button>;
        lessonsContainer.appendChild(lessonElement);
    });
}

// Start the Lesson
function startLesson() {
    const animationDiv = document.getElementById('animation');
    animationDiv.style.backgroundColor = '#FF5733'; // Example animation
}

// Add a New Lesson
function addLesson() {
    const title = document.getElementById('lesson-title').value;
    const description = document.getElementById('lesson-description').value;

    if (title && description) {
        lessons.push({ title, description });
        displayLessons();
    } else {
        alert('Please fill in both title and description');
    }
}

// Suggest a Lesson
function suggestLesson() {
    const suggestion = document.getElementById('suggest-lesson').value;
    if (suggestion) {
        alert(Thank you for your suggestion: "${suggestion}");
    } else {
        alert('Please write a suggestion');
    }
}

// View Lesson Details
function viewLesson(index) {
    const lesson = lessons[index];
    alert(Title: ${lesson.title}\nDescription: ${lesson.description});
}

// Navigation functions
function showHelp() {
    document.getElementById('help-section').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('settings-section').classList.add('hidden');
}

function closeHelp() {
    document.getElementById('help-section').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

function showSettings() {
    document.getElementById('settings-section').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('help-section').classList.add('hidden');
}

function closeSettings() {
    document.getElementById('settings-section').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

// Authentication functions
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password) {
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        displayLessons(); // Display the lessons after login
    } else {
        alert('Please enter valid credentials.');
    }
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    if (password === confirmPassword) {
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        displayLessons(); // Display the lessons after registration
    } else {
        alert('Passwords do not match.');
    }
}

function showLoginForm() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function showRegisterForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function logout() {
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('main-content').classList.add('hidden');
}
