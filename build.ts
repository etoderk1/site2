import fs from 'fs';

// Читаем только App.tsx
const appCode = fs.readFileSync('src/App.tsx', 'utf8');

function cleanup(code: string) {
    return code
        // Удаляем все импорты (включая многострочные и с фигурными скобками)
        .replace(/import\s+[\s\S]*?from\s+['"].*?['"];?/g, '')
        // Удаляем импорты без from (side-effect imports)
        .replace(/import\s+['"].*?['"];?/g, '')
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
        
        .loading-screen {
            position: fixed;
            inset: 0;
            background: #F2F2F7;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: opacity 0.5s ease-out;
        }
        .dark .loading-screen { background: #000; color: #fff; }
    </style>
</head>
<body class="bg-[#F2F2F7] dark:bg-black text-[#1D1D1F] dark:text-white transition-colors duration-500">
    <div id="error-display"></div>
    <div id="root">
        <div class="loading-screen">
            <div class="font-black uppercase tracking-tighter text-2xl animate-pulse">
                HYPE IS LOADING...
            </div>
            <div id="loading-status" class="mt-4 text-xs font-bold uppercase tracking-widest opacity-50">Initializing...</div>
        </div>
    </div>

    <script>
        // Глобальный перехватчик ошибок
        window.onerror = function(msg, url, lineNo, columnNo, error) {
            console.error('Global Error:', msg, 'at', url, ':', lineNo);
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
        window.React = React;
        window.ReactDOM = ReactDOM;
    </script>

    <script type="text/babel" data-presets="react,typescript">
        const { useState, useRef, useEffect, useMemo, useCallback, StrictMode } = React;
        
        const updateStatus = (text) => {
            const el = document.getElementById('loading-status');
            if (el) el.innerText = text;
        };

        updateStatus('Loading libraries...');

        // Библиотеки из глобального контекста
        let motion = (window.Motion && window.Motion.motion) || (window.FramerMotion && window.FramerMotion.motion) || (window.motion && window.motion.motion) || {};
        let AnimatePresence = (window.Motion && window.Motion.AnimatePresence) || (window.FramerMotion && window.FramerMotion.AnimatePresence) || (window.motion && window.motion.AnimatePresence);
        
        if (!motion.div) {
            console.warn('Framer Motion not fully loaded, using fallbacks');
            const fallbackMotion = (tag) => (props) => {
                const { initial, animate, exit, transition, layout, ...rest } = props;
                return React.createElement(tag, rest);
            };
            ['div', 'span', 'section', 'nav', 'button', 'input', 'img', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'ul', 'li'].forEach(tag => {
                if (!motion[tag]) motion[tag] = fallbackMotion(tag);
            });
        }
        
        if (!AnimatePresence) {
            console.warn('AnimatePresence not found, using fallback');
            AnimatePresence = ({ children }) => <>{children}</>;
        }

        const LucideIcons = window.LucideReact || window.lucide || {};
        
        // Проверка наличия иконок
        const getIcon = (name) => {
            const Icon = LucideIcons[name];
            if (Icon) return Icon;
            console.warn('Icon "' + name + '" not found in LucideIcons');
            return (props) => (
                <span {...props} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid currentColor', fontSize: '10px', padding: '2px', ...props.style }}>
                    {name.substring(0, 2)}
                </span>
            );
        };

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

        updateStatus('Bootstrapping App...');

        // --- ПРИЛОЖЕНИЕ ---
        ${cleanup(appCode).replace(/`/g, '\\`').replace(/\$/g, '\\$')}

        // Инициализация
        try {
            updateStatus('Rendering...');
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
            console.log('App rendered successfully');
            
            // Hide loading screen
            setTimeout(() => {
                const loader = document.querySelector('.loading-screen');
                if (loader) loader.style.opacity = '0';
                setTimeout(() => { if (loader) loader.style.display = 'none'; }, 500);
            }, 500);
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
