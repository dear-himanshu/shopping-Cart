// Sample product data
const products = [
    {
        id: 1,
        title: "Dropset 2 trainer",
        description: 'This is the description for Shoe 1.',
        price: "MRP: ₹7279.00",
        category_tag: "Women • Training",
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da96729060a24406930b616630e8aea9_9366/Dropset_2_Trainer_Burgundy_HQ8777_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9913657d54794b75bd1126a602e041da_9366/Dropset_2_Trainer_Burgundy_HQ8777_04_standard.jpg",
        image3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b0d56f47ab3414e9e0a3eae77d0de7a_9366/Dropset_2_Trainer_Burgundy_HQ8777_02_standard_hover.jpg",
        image4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b902cf27b4e4757b9d3e9d54bf41d33_9366/Dropset_2_Trainer_Burgundy_HQ8777_05_standard.jpg",
        
    },
    {
        id: 2,
        title: "Adizero Ubersonic 4.1 Tennis Shoes",
        description: 'This is the description for Shoe 2.',
        price: 'MRP: ₹7839.00',
        category_tag: "Women • Tennis",
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3172ab9ced14877a70573e09aae6042_9366/Adizero_Ubersonic_4.1_Tennis_Shoes_Turquoise_ID1567_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/460538ccb48a425ea77f1c313ded7607_9366/Adizero_Ubersonic_4.1_Tennis_Shoes_Turquoise_ID1567_04_standard.jpg" ,
        image3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4761d907980d4eb7895d8b9ef58c9012_9366/Adizero_Ubersonic_4.1_Tennis_Shoes_Turquoise_ID1567_02_standard.jpg",
        image4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/14a20b2485e342bd98bbeabd30db0d61_9366/Adizero_Ubersonic_4.1_Tennis_Shoes_Turquoise_ID1567_05_standard.jpg",
    },
   
    {
        id: 3,
        title: 'Switch FWD Running Shoes',
        description: 'This is the description for Shoe 2.',
        price: 'MRP: ₹5599.00',
        category_tag:"Women • Running",
        image1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3e5ae3614474d0ebe1f8907120ef095_9366/Switch_FWD_Running_Shoes_White_FZ5685_01_standard.jpg',
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0cf440be6d6f46e189ecf9eae0b26881_9366/Switch_FWD_Running_Shoes_White_FZ5685_04_standard.jpg",
        image3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/861d6b6e19ca4ddc8c1543385cebea04_9366/Switch_FWD_Running_Shoes_White_FZ5685_02_standard_hover.jpg",
        image4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b22687e816a24bd1aceb526e3beae952_9366/Switch_FWD_Running_Shoes_White_FZ5685_06_standard.jpg",
    },
    {
        id: 4,
        title: 'GAUZEWALK SHOES',
        description: 'This is the description for Shoe 2.',
        price: 'MRP: ₹2105.00',
        category_tag: "Men • Walking",
        image1: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/631ae7a05b964d7faac3af8c00b4a506_9366/GAUZEWALK_SHOES_Blue_GC0581_01_standard.jpg",
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e570606a4e214dc29269af8d0057a518_9366/GAUZEWALK_SHOES_Blue_GC0581_04_standard.jpg",
        image3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c62b2e1c2134d519ccbaf8d00578ae0_9366/GAUZEWALK_SHOES_Blue_GC0581_05_standard.jpg",
        image4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df1f29c09ed147f29cbeaf8d0057935a_9366/GAUZEWALK_SHOES_Blue_GC0581_06_standard.jpg",
    },
    {
        id: 5,
        title: 'Dropset Trainer',
        description: 'This is the description for Shoe 2.',
        price: 'MRP: ₹12999.00',
        category_tag: "Training",
        image1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b76071d9d7aa41488925a73b8873d845_9366/Dropset_2_Trainer_Orange_IE8049_01_standard.jpg',
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08afc5c818b74c50b94249f6f97dfe9f_9366/Dropset_2_Trainer_Orange_IE8049_04_standard.jpg",  
        image3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/94e253b74e4b4848a9b149d04744543e_9366/Dropset_2_Trainer_Orange_IE8049_02_standard_hover.jpg",
        image4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/66b6c74611334f6e8616414dfeb21c11_9366/Dropset_2_Trainer_Orange_IE8049_05_standard.jpg",
    },
    {
        id: 6,
        title: 'Everyset shoes',
        description: 'This is the description for Shoe 2.',
        price: 'MRP: ₹4355.00',
        category_tag: "Training",
        image1: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e8043f9d31b432c8da9b7ee97aef204_9366/Everyset_Shoes_Green_IF9910_01_standard.jpg',
        image2: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/500da706c8fe49f0a507af99874a8d41_9366/Everyset_Shoes_Green_IF9910_04_standard.jpg",
        image3: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/584b169eaeab4db7b9c477460a8532fa_9366/Everyset_Shoes_Green_IF9910_02_standard_hover.jpg",
        image4: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c08c21dc1b4d8fbeca5c7b47e213a9_9366/Everyset_Shoes_Green_IF9910_06_standard.jpg",
    },
];



// // Function to load header HTML content
// function loadHeader() {
//     fetch('header.html')
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector('header').innerHTML = data;
//         })
//         .catch(error => console.error('Error loading header:', error));
// }

// // Call the function to load the header
// loadHeader();


// Function to get query parameter value by name
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the product ID from the URL
const productId = getQueryParam('id');

// Find the product data based on the ID
const product = products.find(p => p.id == productId);

if (product) {
    // Update the product details on the page
    document.getElementById('product-title').innerText = product.title;
    document.getElementById('category_name').innerText = product.category_tag;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-image1').src = product.image1;
    document.getElementById('product-image2').src = product.image2;
    document.getElementById('product-image3').src = product.image3;
    document.getElementById('product-image4').src = product.image4;
}





