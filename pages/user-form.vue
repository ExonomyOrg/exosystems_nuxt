<template>
    <div class="form-container">
        <div class="header">
            <h1>
                Complete Your Profile
                <img src="/assets/account-circle.svg" alt="User" class="logo" />
            </h1>
        </div>
        <form @submit.prevent="handleSubmit" class="user-form">
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <div class="input-container">
                    <input v-model="form.firstName" type="text" id="firstName" required
                        placeholder="Enter your first name" />
                    <span :class="form.firstName ? 'valid' : 'invalid'"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <div class="input-container">
                    <input v-model="form.lastName" type="text" id="lastName" required
                        placeholder="Enter your last name" />
                    <span :class="form.lastName ? 'valid' : 'invalid'"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="contactNumber">Contact Number:</label>
                <div class="input-container">
                    <div class="contact-number-wrapper">
                        <select v-model="form.countryCode">
                            <option v-for="(country, code) in countryCodes" :key="code" :value="code">
                                {{ country }} ({{ code }})
                            </option>
                        </select>
                        <input v-model="form.contactNumber" type="tel" id="contactNumber" required
                            placeholder="Enter your contact number" @input="validateContactNumber" />
                    </div>
                    <span :class="isContactNumberValid ? 'valid' : 'invalid'"></span>
                </div>
            </div>
            <button type="submit" :disabled="!isFormValid">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { useTokenStore } from '~/stores/tokenStore'; // Importing pinia store
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

// Initialize the store
const tokenStore = useTokenStore();
const form = ref({
    firstName: '',
    lastName: '',
    contactNumber: '',
    countryCode: '+1', // Default country code
});

// A comprehensive list of country codes
const countryCodes = ref({
    '+1': 'USA',
    '+44': 'UK',
    '+91': 'India',
    '+33': 'France',
    '+49': 'Germany',
    '+81': 'Japan',
    '+86': 'China',
    '+7': 'Russia',
    '+55': 'Brazil',
    '+61': 'Australia',
    '+27': 'South Africa',
    '+39': 'Italy',
    '+34': 'Spain',
    '+52': 'Mexico',
    '+43': 'Austria',
    '+41': 'Switzerland',
    '+47': 'Norway',
    '+46': 'Sweden',
    '+351': 'Portugal',
    '+48': 'Poland',
    '+60': 'Malaysia',
    '+65': 'Singapore',
    '+62': 'Indonesia',
    '+63': 'Philippines',
    '+64': 'New Zealand',
    '+20': 'Egypt',
    '+213': 'Algeria',
    '+212': 'Morocco',
    '+971': 'UAE',
    '+966': 'Saudi Arabia',
    // Add more country codes as needed
});

const router = useRouter();
const route = useRoute(); // Access the route to get query parameters

// Access the token and provider from query parameters
const token = route.query.token || ''; // Get the token from the URL

// Computed properties for validation
const isContactNumberValid = computed(
    () => form.value.contactNumber.length >= 10
);
const isFormValid = computed(
    () =>
        form.value.firstName &&
        form.value.lastName &&
        isContactNumberValid.value
);

const handleSubmit = async () => {
    if (isFormValid.value) {
        let final_contact_number = form.value.countryCode + form.value.contactNumber;
        const form_data = {
            firstname: form.value.firstName,
            lastname: form.value.lastName,
            contactnumber: final_contact_number
        };
        let provider = localStorage.getItem('auth_provider');

        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ credential: token, provider, form_data }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                console.log('User authenticated successfully');
                // Redirect or handle success
                // Set the token in the localstorage based on the provider
                switch (provider) {
                    case 'google':
                        localStorage.setItem('google_token', token);
                        break;
                    case 'github':
                        localStorage.setItem('github_token', token);// Assuming you're storing GitHub token this way
                        break;
                    case 'metamask':
                        localStorage.setItem('metamask_token', token); // Assuming you're storing MetaMask token
                        break;
                    default:
                        console.error('No provider found');
                        return;
                }
                window.location.href = 'https://exosystems.net';
            } else {
                console.error('Authentication failed', result.message);
            }
        } catch (error) {
            console.error('Error during submission', error);
        }
    }
};

// Validate contact number to ensure only digits are allowed
const validateContactNumber = (event) => {
    const input = event.target;
    const value = input.value;
    const digitsOnly = value.replace(/\D/g, ''); // Remove non-digit characters
    if (value !== digitsOnly) {
        input.value = digitsOnly;
        form.value.contactNumber = digitsOnly;
    }
}
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #222831;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

h1 {
    font-size: 2.5rem;
    color: #eeeeee;
    margin: 0;
}

.user-form {
    background: #393e46;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 100%;
    max-width: 600px;
}

.form-group {
    margin-bottom: 24px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
    color: #00adb5;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
}

span.valid::before {
    content: '✔️';
    color: green;
    position: absolute;
    right: 10px;
}

span.invalid::before {
    content: '❌';
    color: red;
    position: absolute;
    right: 10px;
}

.contact-number-wrapper {
    display: flex;
    align-items: center;
}

select {
    padding: 14px;
    border: 1px solid #00adb5;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 1rem;
    color: #eeeeee;
    background: #393e46;
    margin-right: 10px;
}

input {
    padding: 14px;
    border: 1px solid #00adb5;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 1rem;
    color: #eeeeee;
    background: #393e46;
    flex: 1;
}

input:focus {
    border-color: #00adb5;
    outline: none;
    box-shadow: 0 0 6px rgba(0, 173, 181, 0.5);
}

button {
    padding: 14px;
    background-color: #00adb5;
    color: #222831;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    width: 100%;
}

button:disabled {
    background-color: #555;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #007d7f;
}

.logo {
    width: 50px;
    height: 50px;
}
</style>
