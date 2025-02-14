async function fetchParkingStatus() {
    try {
        const response = await fetch('http://127.0.0.1:5000/detect');
        const data = await response.json();
        document.getElementById('parking-status').innerText =
            `Available Spaces: ${data.available_spaces}`;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchParkingStatus();
