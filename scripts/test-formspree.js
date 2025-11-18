// Small test script to POST a sample payload to Formspree
// Requires Node 18+ (for global fetch). Run: node scripts/test-formspree.js

const ENDPOINT = 'https://formspree.io/f/mldnaeeb';

async function run() {
    try {
        const payload = {
            name: 'Local Test',
            email: 'tester@example.com',
            message: 'This is a test submission from scripts/test-formspree.js',
        };

        const res = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log('Status:', res.status, res.statusText);
        try {
            const body = await res.json();
            console.log('JSON response:', body);
        } catch (e) {
            const text = await res.text();
            console.log('Text response:', text);
        }
    } catch (err) {
        console.error('Network or fetch error:', err);
    }
}

run();