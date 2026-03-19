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
    
    <!-- React & Dependencies -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
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
            background: #fff;
            color: #ef4444;
            padding: 2rem;
            z-index: 9999;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            overflow: auto;
            line-height: 1.5;
        }
        #error-display h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: -0.025em; color: #000; }
        #error-display pre { background: #f8f8f8; padding: 1rem; border: 1px solid #eee; border-radius: 0; font-size: 0.875rem; white-space: pre-wrap; word-break: break-all; }
    </style>
</head>
<body class="bg-[#F2F2F7] dark:bg-black text-[#1D1D1F] dark:text-white transition-colors duration-500">
    <div id="error-display"></div>
    <div id="root">
        <div class="h-screen w-screen flex items-center justify-center font-black uppercase tracking-tighter text-2xl animate-pulse">
            HYPE IS LOADING...
        </div>
    </div>

    <script>
        // Глобальный перехватчик ошибок
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            const display = document.getElementById('error-display');
            if (!display) return;
            display.style.display = 'block';
            let content = '<h1>Runtime Error</h1>';
            content += '<pre>' + msg + '\\n\\nLocation: ' + url + ':' + lineNo + ':' + columnNo;
            if (error && error.stack) {
                content += '\\n\\nStack Trace:\\n' + error.stack;
            }
            content += '</pre>';
            
            if (msg.includes('Script error')) {
                content += '<div style="margin-top: 1rem; color: #666; font-size: 0.875rem;"><b>Note:</b> This is a cross-origin error. Check the browser console (F12) for the actual error message.</div>';
            }
            
            display.innerHTML = content;
            return false;
        };

        // Эмуляция окружения Node.js для браузера
        window.process = { env: { NODE_ENV: 'production' } };
    </script>

    <script type="text/babel" data-presets="react,typescript">
        const { useState, useRef, useEffect, useMemo, useCallback, StrictMode } = React;
        
        // Библиотеки из глобального контекста
        const motion = (window.Motion && window.Motion.motion) || (window.FramerMotion && window.FramerMotion.motion) || {};
        const AnimatePresence = (window.Motion && window.Motion.AnimatePresence) || (window.FramerMotion && window.FramerMotion.AnimatePresence);
        
        const LucideIcons = window.LucideReact || {};
        
        // Проверка наличия иконок
        const getIcon = (name) => LucideIcons[name] || (() => <span title={name}>[Icon]</span>);

        const Search = getIcon('Search');
        const ShoppingBag = getIcon('ShoppingBag');
        const User = getIcon('User');
        const X = getIcon('X');
        const Heart = getIcon('Heart');
        const ChevronRight = getIcon('ChevronRight');
        const CreditCard = getIcon('CreditCard');
        const Apple = getIcon('Apple');
        const Star = getIcon('Star');
        const TrendingUp = getIcon('TrendingUp');
        const LogOut = getIcon('LogOut');
        const Package = getIcon('Package');
        const Settings = getIcon('Settings');
        const Bell = getIcon('Bell');
        const Shield = getIcon('Shield');
        const MapPin = getIcon('MapPin');
        const CheckCircle = getIcon('CheckCircle');
        const Loader2 = getIcon('Loader2');
        const Trash2 = getIcon('Trash2');
        const ArrowLeft = getIcon('ArrowLeft');
        const Info = getIcon('Info');
        const Tag = getIcon('Tag');
        const Share2 = getIcon('Share2');
        const ChevronLeft = getIcon('ChevronLeft');
        const ExternalLink = getIcon('ExternalLink');
        const Filter = getIcon('Filter');
        const Menu = getIcon('Menu');
        const Plus = getIcon('Plus');
        const Minus = getIcon('Minus');
        const Check = getIcon('Check');

        // Утилита cn
        const cn = (...inputs) => {
            const twMerge = window.tailwindMerge && window.tailwindMerge.twMerge;
            const clsx = window.clsx && (window.clsx.clsx || window.clsx);
            if (twMerge && clsx) {
                return twMerge(clsx(inputs));
            }
            return inputs.filter(Boolean).join(' ');
        };

        // --- ПРИЛОЖЕНИЕ ---
        ${cleanup(appCode)}

        // Инициализация
        try {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
        } catch (err) {
            console.error("Initialization failed:", err);
            const display = document.getElementById('error-display');
            if (display) {
                display.style.display = 'block';
                display.innerHTML = '<h1>Initialization Error</h1><pre>' + err.stack + '</pre>';
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('index.html generated successfully!');
