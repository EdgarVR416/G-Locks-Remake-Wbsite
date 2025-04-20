document.addEventListener('DOMContentLoaded', () => {
    const leaksContainer = document.querySelector('.leaks-container');
    
    // Default leaks array
    const defaultLeaks = [
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195568040837150/Untitled_4.png?ex=68031279&is=6801c0f9&hm=3c2609816d31814ad870840fc04d4f770e2ae90b0d6900c24640945c2d5dad1a&',
            title: 'RP Testing Roblox Hood',
            link: 'https://link-center.net/1237439/rp-testing-roblox-hood'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195526835863694/Untitled_3.png?ex=6803126f&is=6801c0ef&hm=af322380b24f68b495fdff6489430a584a28ef10d1ab1329e47f949dedd385a1&',
            title: 'Santos World Roblox',
            link: 'https://direct-link.net/1237439/santos-world-roblox'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195477586481283/11.png?ex=68031264&is=6801c0e4&hm=4e5396f0c314b83ca40e4ccab43c465a1e8d6e2608fd7aedd4e1d42cb05e61b2&',
            title: 'Trap N Bang Fully',
            link: 'https://link-center.net/1237439/trap-n-bang-fully'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466369/1355195709984346112/maxresdefault.webp?ex=6803129b&is=6801c11b&hm=c5fcdb6143b588a7977622aa3311252b197258c1686672431f99578b76d100a7&',
            title: 'Hoop Hills Roblox',
            link: 'https://direct-link.net/1237439/hoop-hills-roblox'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466370/1355196128894648480/Untitled_1.png?ex=680312ff&is=6801c17f&hm=7f6e29f64da958a621c3f1a1673a8c90616f81fb0ae5ddf14d9ee7b022a96342&',
            title: 'Roblox Basketball System',
            link: 'https://link-center.net/1237439/roblox-basketball-system'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1360541810069344416/Untitled-1-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered-Recovered.png?ex=6802bf0d&is=68016d8d&hm=8f7b30424d1627f081566c8bd9a23654744e2aefe6efd82e57f28596c22a6f0b&',
            title: 'CG Scenes Roblox CC',
            link: 'https://link-center.net/1237439/cg-scenes-roblox-cc'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1355200020248395847/Capture.png?ex=6803169f&is=6801c51f&hm=18a901c0e6edbb933208829f6369f27b41a7a7f1ddfd83fd3b0e44f8daed04b9&',
            title: 'FiveM Rig Character CC',
            link: 'https://link-hub.net/1237439/fivem-rig-character-cc'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1355199861934526474/Untitled-2.png?ex=68031679&is=6801c4f9&hm=0cdad6135757c831c6e6ba97954f86acc701baeb453e25ecd0f7c604e2ecd418&',
            title: 'Free Roblox ATM Banking',
            link: 'https://link-hub.net/1237439/free-roblox-atm-banking'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466371/1355200085532741703/q3AJ21W.png?ex=680316ae&is=6801c52e&hm=d8f54d51f73adf0b73ab37ae99648f3cefeaa869e62ebba2e1e2301533384d08&',
            title: 'New FiveM Rig',
            link: 'https://link-hub.net/1237439/new-fivem-rigggg'
        },
        {
            src: 'https://cdn.discordapp.com/attachments/1355184913338466372/1355200424277446788/Untitled.png?ex=680316ff&is=6801c57f&hm=f7a8cf6aeccd9f198e8616389cd904601ba6df0d05902457b8d0113e9c9a0cfa&',
            title: 'Auto Spoofer V1',
            link: 'https://mboost.me/eqo'
        }
    ];
    
    // Load leaks from localStorage or use default
    let leaks = JSON.parse(localStorage.getItem('glockLeaks')) || defaultLeaks;
    
    // Function to save leaks to localStorage
    function saveLeaks() {
        localStorage.setItem('glockLeaks', JSON.stringify(leaks));
    }
    
    // Create leak panels
    function renderLeaks() {
        // Clear existing panels
        leaksContainer.innerHTML = '';
        
        leaks.forEach((leak, index) => {
            const panel = document.createElement('div');
            panel.className = 'leak-panel';
            panel.style.animationDelay = `${index * 0.1}s`;
            
            const img = document.createElement('img');
            img.src = leak.src;
            img.alt = `${leak.title} Screenshot`;
            
            const title = document.createElement('h3');
            title.className = 'leak-title';
            title.textContent = leak.title;
            
            const button = document.createElement('a');
            button.href = leak.link;
            button.className = 'download-button';
            button.textContent = 'Download';
            button.target = '_blank'; // Open in new tab
            
            // Add delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-leak-button';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.title = 'Delete Leak';
            
            // Delete button event
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('Are you sure you want to delete this leak?')) {
                    leaks.splice(index, 1);
                    saveLeaks();
                    renderLeaks();
                }
            });
            
            panel.appendChild(img);
            panel.appendChild(title);
            panel.appendChild(button);
            panel.appendChild(deleteButton);
            leaksContainer.appendChild(panel);
        });
    }
    
    // Initial render
    renderLeaks();

    // Add admin button to the page
    const adminButton = document.createElement('button');
    adminButton.textContent = 'Admin Panel';
    adminButton.className = 'admin-button';
    document.querySelector('.leaks').appendChild(adminButton);
    
    // Create admin modal
    const adminModal = document.createElement('div');
    adminModal.className = 'admin-modal';
    adminModal.innerHTML = `
        <div class="admin-modal-content">
            <span class="close-admin">&times;</span>
            <h2>Admin Access</h2>
            <div class="password-section">
                <input type="password" id="admin-password" placeholder="Enter password">
                <button id="submit-password">Submit</button>
            </div>
            <div class="add-leak-section" style="display: none;">
                <h3>Add New Leak</h3>
                <input type="text" id="leak-title" placeholder="Leak Title">
                <input type="text" id="leak-image" placeholder="Image URL">
                <input type="text" id="leak-link" placeholder="Download Link">
                <button id="add-leak-button">Add Leak</button>
                <div id="add-status"></div>
            </div>
        </div>
    `;
    document.body.appendChild(adminModal);
    
    // Admin button click event
    adminButton.addEventListener('click', () => {
        adminModal.style.display = 'block';
    });
    
    // Close modal
    document.querySelector('.close-admin').addEventListener('click', () => {
        adminModal.style.display = 'none';
    });
    
    // Password verification
    document.getElementById('submit-password').addEventListener('click', () => {
        const password = document.getElementById('admin-password').value;
        if (password === 'abc123') {
            document.querySelector('.password-section').style.display = 'none';
            document.querySelector('.add-leak-section').style.display = 'block';
        } else {
            alert('Incorrect password!');
        }
    });
    
    // Add new leak
    document.getElementById('add-leak-button').addEventListener('click', () => {
        const title = document.getElementById('leak-title').value;
        const imageUrl = document.getElementById('leak-image').value;
        const downloadLink = document.getElementById('leak-link').value;
        
        if (!title || !imageUrl || !downloadLink) {
            document.getElementById('add-status').textContent = 'Please fill all fields';
            return;
        }
        
        const newLeak = {
            title: title,
            src: imageUrl,
            link: downloadLink
        };
        
        // Add to local array
        leaks.push(newLeak);
        
        // Save to localStorage
        saveLeaks();
        
        // Re-render all leaks
        renderLeaks();
        
        // Clear form and show success
        document.getElementById('leak-title').value = '';
        document.getElementById('leak-image').value = '';
        document.getElementById('leak-link').value = '';
        document.getElementById('add-status').textContent = 'Leak added successfully!';
        
        // Close modal after 2 seconds
        setTimeout(() => {
            adminModal.style.display = 'none';
            document.querySelector('.password-section').style.display = 'block';
            document.querySelector('.add-leak-section').style.display = 'none';
            document.getElementById('admin-password').value = '';
            document.getElementById('add-status').textContent = '';
        }, 2000);
    });
    
    // Add Leaks button in bottom right
    const addLeaksButton = document.createElement('button');
    addLeaksButton.textContent = 'Add Leaks';
    addLeaksButton.className = 'add-leaks-button';
    document.body.appendChild(addLeaksButton);
    
    // Add event listener to the new button
    addLeaksButton.addEventListener('click', () => {
        adminModal.style.display = 'block';
    });
    
    // Add reset button to admin panel
    const resetSection = document.createElement('div');
    resetSection.className = 'reset-section';
    resetSection.innerHTML = `
        <hr style="margin: 2rem 0; border-color: rgba(255, 0, 0, 0.2);">
        <h3>Reset Leaks</h3>
        <p style="color: #cccccc; margin-bottom: 1rem;">This will reset all leaks to default.</p>
        <button id="reset-leaks-button">Reset Leaks</button>
    `;
    
    document.querySelector('.add-leak-section').appendChild(resetSection);
    
    // Reset leaks event
    document.getElementById('reset-leaks-button').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all leaks to default? This cannot be undone.')) {
            leaks = [...defaultLeaks];
            saveLeaks();
            renderLeaks();
            document.getElementById('add-status').textContent = 'Leaks reset to default!';
            
            setTimeout(() => {
                adminModal.style.display = 'none';
                document.querySelector('.password-section').style.display = 'block';
                document.querySelector('.add-leak-section').style.display = 'none';
                document.getElementById('admin-password').value = '';
                document.getElementById('add-status').textContent = '';
            }, 2000);
        }
    });
});