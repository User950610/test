
        const db = {
        iphone: [
    // iPhone 17 系列 (2025 旗艦)
    { id: 171, name: "iPhone 17 Pro Max", series: "iPhone 17", icon: "📱", desc: "6.9 吋螢幕，搭載 A19 Pro 晶片，支援 10x 混合變焦。", specs: [{gb: 256, price: 44900}, {gb: 512, price: 51900}, {gb: 1024, price: 58900}] },
    { id: 172, name: "iPhone 17 Pro", series: "iPhone 17", icon: "📱", desc: "6.3 吋螢幕，ProMotion 120Hz，極致鈦金屬框架。", specs: [{gb: 128, price: 36900}, {gb: 256, price: 40400}, {gb: 512, price: 47400}] },
    { id: 173, name: "iPhone 17", series: "iPhone 17", icon: "📱", desc: "6.1 吋螢幕，A19 晶片，全新多彩鋁金屬設計。", specs: [{gb: 128, price: 29900}, {gb: 256, price: 33400}, {gb: 512, price: 40400}] },

    // iPhone 16 系列
    { id: 161, name: "iPhone 16 Pro Max", series: "iPhone 16", icon: "📱", desc: "6.9 吋螢幕，最強影片拍攝與相機控制按鈕。", specs: [{gb: 256, price: 44900}, {gb: 512, price: 51900}] },
    { id: 162, name: "iPhone 16 Pro", series: "iPhone 16", icon: "📱", desc: "6.3 吋螢幕，A18 Pro 晶片，專業相機系統。", specs: [{gb: 128, price: 36900}, {gb: 256, price: 40400}] },
    { id: 163, name: "iPhone 16", series: "iPhone 16", icon: "📱", desc: "6.1 吋螢幕，支援空間相片與影片拍攝。", specs: [{gb: 128, price: 29900}, {gb: 256, price: 33400}] },

    // iPhone 15 系列
    { id: 151, name: "iPhone 15 Pro Max", series: "iPhone 15", icon: "📱", desc: "6.7 吋螢幕，5x 光學變焦，USB-C 傳輸速度進化。", specs: [{gb: 256, price: 44900}, {gb: 512, price: 51900}] },
    { id: 152, name: "iPhone 15 Pro", series: "iPhone 15", icon: "📱", desc: "6.1 吋螢幕，首款航太級鈦金屬 iPhone。", specs: [{gb: 128, price: 34900}, {gb: 256, price: 38400}] },
    { id: 153, name: "iPhone 15", series: "iPhone 15", icon: "📱", desc: "6.1 吋螢幕，靈動島功能正式下放。", specs: [{gb: 128, price: 24900}, {gb: 256, price: 28400}] },

    // iPhone 14 系列
    { id: 141, name: "iPhone 14 Pro Max", series: "iPhone 14", icon: "📱", desc: "6.7 吋螢幕，4800 萬像素主相機，永遠顯示螢幕。", specs: [{gb: 128, price: 38900}, {gb: 256, price: 42400}] },
    { id: 142, name: "iPhone 14 Pro", series: "iPhone 14", icon: "📱", desc: "6.1 吋螢幕，靈動島首度登場，A16 仿生晶片。", specs: [{gb: 128, price: 31900}, {gb: 256, price: 35400}] },
    { id: 143, name: "iPhone 14", series: "iPhone 14", icon: "📱", desc: "6.1 吋螢幕，超強續航力與衛星通訊功能。", specs: [{gb: 128, price: 21900}, {gb: 256, price: 25400}] },

    // iPhone 13 系列
    { id: 131, name: "iPhone 13 Pro Max", series: "iPhone 13", icon: "📱", desc: "6.7 吋螢幕，首款 120Hz ProMotion 螢幕。", specs: [{gb: 128, price: 32900}, {gb: 256, price: 36400}] },
    { id: 132, name: "iPhone 13 Pro", series: "iPhone 13", icon: "📱", desc: "6.1 吋螢幕，強大的電影級模式錄影功能。", specs: [{gb: 128, price: 28900}, {gb: 256, price: 32400}] },
    { id: 133, name: "iPhone 13", series: "iPhone 13", icon: "📱", desc: "6.1 吋螢幕，最經典的對角線雙相機設計。", specs: [{gb: 128, price: 17900}, {gb: 256, price: 21400}] }
],
            accessories: [
                { id: 501, name: "AirPods Pro 2", type: "音訊", icon: "🎧", desc: "主動式降噪，個人化空間音訊。", specs: [{gb: "標準", price: 7490}] },
                { id: 502, name: "Apple Watch S10", type: "手錶", icon: "⌚", desc: "先進健康監測，更輕薄。", specs: [{gb: "42mm", price: 13500}, {gb: "46mm", price: 14500}] },
                { id: 503, name: "USB-C 充電線", type: "電源", icon: "🧶", desc: "2 公尺編織線，耐用快充。", specs: [{gb: "2m", price: 990}] }
            ]
        };

        let cart = [];
        let currentProduct = null;
        let currentCategory = 'iPhone';

        function showHome() {
            document.getElementById('home-page').classList.remove('hidden');
            document.getElementById('shop-container').classList.add('hidden');
        }

        function switchPage(page) {
            currentCategory = page;
            document.getElementById('home-page').classList.add('hidden');
            document.getElementById('shop-container').classList.remove('hidden');
            renderSidebar();
            renderProducts('全部');
        }

        function renderProducts(filter) {
    let data = currentCategory === 'iPhone' ? db.iphone : db.accessories;

    if (filter !== '全部') {
        // 同時檢查 series 或 type，確保 iPhone 和 配件都能正確篩選
        data = data.filter(p => p.series === filter || p.type === filter);
    }

    currentList = data; 
    applyFilter();      
}
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (currentCategory === 'iPhone') {
        const series = ['全部', 'iPhone 17', 'iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone 13'];
        sidebar.innerHTML = `<h3>系列</h3><ul>` + 
            series.map(s => `<li onclick="renderProducts('${s}')">${s}</li>`).join('') + `</ul>`;
    } else {
        const types = ['全部', '音訊', '手錶', '電源'];
        sidebar.innerHTML = `<h3>類別</h3><ul>` + 
            types.map(t => `<li onclick="renderProducts('${t}')">${t}</li>`).join('') + `</ul>`;
    }
}

       
        

        function openModal(id) {
            const all = [...db.iphone, ...db.accessories];
            currentProduct = all.find(p => p.id === id);
            document.getElementById('modal-name').innerText = currentProduct.name;
            document.getElementById('modal-desc').innerText = currentProduct.desc;
            document.getElementById('modal-img').innerText = currentProduct.icon;
            
            const select = document.getElementById('modal-spec-select');
            select.innerHTML = currentProduct.specs.map(s => `<option value="${s.price}">${s.gb}${typeof s.gb === 'number' ? 'GB' : ''}</option>`).join('');

            const comp = document.getElementById('comparison-area');
            if (typeof currentProduct.specs[0].gb === 'number' && currentProduct.specs.length > 1) {
                comp.style.display = 'block';
                const unitPrices = currentProduct.specs.map(s => s.price / s.gb);
                const minUnit = Math.min(...unitPrices);
                document.getElementById('compare-table-body').innerHTML = `<tr><th>容量</th><th>價格</th><th>每GB</th></tr>` + currentProduct.specs.map(s => `
                    <tr class="${(s.price / s.gb) === minUnit ? 'best-value' : ''}"><td>${s.gb}GB</td><td>$${s.price.toLocaleString()}</td><td>$${Math.round(s.price/s.gb)}</td></tr>
                `).join('');
            } else { comp.style.display = 'none'; }

            updateModalPrice();
            document.getElementById('product-modal').style.display = 'flex';
        }

        function updateModalPrice() {
            const price = parseInt(document.getElementById('modal-spec-select').value);
            document.getElementById('modal-price').innerText = "NT$ " + price.toLocaleString();
        }

        function closeModal() { document.getElementById('product-modal').style.display = 'none'; }
        function toggleCart() { document.getElementById('cart-sidebar').classList.toggle('open'); }

        function addToCart() {
            const sel = document.getElementById('modal-spec-select');
            cart.push({ name: currentProduct.name, spec: sel.options[sel.selectedIndex].text, price: parseInt(sel.value) });
            updateCartUI();
            closeModal();
            toggleCart();
        }

        function updateCartUI() {
            document.getElementById('cart-count').innerText = cart.length;
            let total = 0;
            document.getElementById('cart-items-list').innerHTML = cart.map(item => {
                total += item.price;
                return `<div class="cart-item"><div><b>${item.name}</b><br><small>${item.spec}</small></div><div>NT$ ${item.price.toLocaleString()}</div></div>`;
            }).join('');
            document.getElementById('cart-total').innerText = "NT$ " + total.toLocaleString();
        }

        function showLogin() { document.getElementById('login-modal').style.display = 'flex'; }
        function closeLogin() { document.getElementById('login-modal').style.display = 'none'; }
        function doLogin() {
            const name = document.getElementById('username').value || "User";
            document.getElementById('user-display').innerText = "Hi, " + name;
            closeLogin();
        }
    
        let currentList = [];

        function applyFilter() {
    const keyword = document.getElementById('search-input')?.value.toLowerCase() || '';
    const sortType = document.getElementById('sort-select')?.value || '';

    let result = currentList.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    if (sortType === 'low') {
        result.sort((a, b) => a.specs[0].price - b.specs[0].price);
    } else if (sortType === 'high') {
        result.sort((a, b) => b.specs[0].price - a.specs[0].price);
    }

    document.getElementById('product-list').innerHTML = result.map(p => {
        // 判斷版本給予不同標籤
        let badgeClass = "std";
        let badgeText = "Standard";
        
        if (p.name.includes("Pro Max")) {
            badgeClass = "max";
            badgeText = "Pro Max";
        } else if (p.name.includes("Pro")) {
            badgeClass = "pro";
            badgeText = "Pro";
        }

        return `
            <div class="product-card" onclick="openModal(${p.id})">
                <span class="product-emoji">${p.icon}</span>
                <div class="product-name">
                    ${p.name} 
                    <span class="badge ${badgeClass}">${badgeText}</span>
                </div> 
                <div class="product-price-label">
                    NT$ ${p.specs[0].price.toLocaleString()} 起
                </div>
            </div>
        `;
    }).join('');
}