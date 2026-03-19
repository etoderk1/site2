import fs from 'fs';

// Читаем только App.tsx
const appCode = fs.readFileSync('src/App.tsx', 'utf8');

function cleanup(code: string) {
    return code
        // Удаляем все импорты (включая многострочные и с фигурными скобками)
        .replace(/import\s+[\s\S]*?from\s+['"].*?['"];/g, '')
        // Удаляем Vite-специфичные вещи (import.meta.env и т.д.)
        .replace(/import\.meta\.env\./g, 'process.env.')
        // Удаляем экспорт по умолчанию
        .replace(/export\s+default\s+function\s+App/g, 'function App')
        // Удаляем именованные экспорты
        .replace(/export\s+/g, '')
        .trim();
}

const html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HYPE — Streetwear Store</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    },
                },
            },
        }
    </script>
    
    <!-- React & Dependencies (Using crossorigin to avoid "Script error") -->
    <script src="https://unpkg.com/react@19/umd/react.production.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/lucide@latest" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/framer-motion@11.11.17/dist/framer-motion.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/clsx@2.1.1/dist/clsx.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/tailwind-merge@2.3.0/dist/bundle-client.umd.js" crossorigin="anonymous"></script>

    <style>
        @layer base {
            body { @apply font-sans; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        #error-display {
            display: none;
            position: fixed;
            inset: 0;
            background: white;
            color: red;
            padding: 20px;
            z-index: 9999;
            font-family: monospace;
            overflow: auto;
        }
    </style>
</head>
<body class="bg-[#F2F2F7] dark:bg-black text-[#1D1D1F] dark:text-white transition-colors duration-500">
    <div id="error-display"></div>
    <div id="root">
        <div class="h-screen w-screen flex items-center justify-center font-black uppercase tracking-tighter text-2xl">
            Загрузка HYPE...
        </div>
    </div>

    <script>
        // Обработка ошибок
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            const display = document.getElementById('error-display');
            display.style.display = 'block';
            let errorMsg = '<h1>Ошибка выполнения:</h1><pre>' + msg + '\\nat ' + url + ':' + lineNo + ':' + columnNo;
            if (error && error.stack) {
                errorMsg += '\\n\\nStack:\\n' + error.stack;
            }
            errorMsg += '</pre>';
            
            if (msg.indexOf('Script error') > -1) {
                errorMsg += '<p style="color: black"><b>Подсказка:</b> Это внешняя ошибка (CORS). Проверьте консоль браузера (F12) для деталей.</p>';
            }
            
            display.innerHTML = errorMsg;
            return false;
        };
    </script>

    <script type="text/babel" data-presets="react">
        const { useState, useRef, useEffect, useMemo, useCallback, StrictMode } = React;
        
        // Глобальные переменные для библиотек
        const motion = window.Motion?.motion || window.FramerMotion?.motion;
        const AnimatePresence = window.Motion?.AnimatePresence || window.FramerMotion?.AnimatePresence;
        
        const LucideIcons = window.LucideReact || {};
        const { 
            Search, ShoppingBag, User, X, Heart, ChevronRight, CreditCard, 
            Apple, Star, TrendingUp, LogOut, Package, Settings, Bell, Shield, 
            MapPin, CheckCircle, Loader2, Trash2, ArrowLeft, Info, Tag, Share2
        } = LucideIcons;

        // Эмуляция функции cn
        const cn = (...inputs) => {
            if (typeof tailwindMerge !== 'undefined' && typeof clsx !== 'undefined') {
                return tailwindMerge.twMerge(clsx.clsx(inputs));
            }
            return inputs.filter(Boolean).join(' ');
        };

        // --- APP LOGIC ---
        ${cleanup(appCode)}

        // Рендеринг
        try {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
        } catch (e) {
            console.error("Render error:", e);
            document.getElementById('error-display').style.display = 'block';
            document.getElementById('error-display').innerHTML = '<h1>Ошибка рендеринга:</h1><pre>' + e.stack + '</pre>';
        }
    </script>
</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('index.html generated successfully!');
