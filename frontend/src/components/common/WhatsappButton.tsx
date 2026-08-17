import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_LINK =
    "https://chat.whatsapp.com/GPheTLR5bAt4fsqfjKzCpx?mode=gi_t";

function WhatsappButton() {
    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join WhatsApp Community"
            className="
                fixed
                bottom-6
                right-6
                z-50
                flex
                items-center
                gap-3
                rounded-full
                bg-green-500
                px-5
                py-3
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-green-600
                hover:shadow-2xl
            "
        >
            <FaWhatsapp size={28} />

            <span className="hidden font-semibold sm:block">
                Join Community
            </span>
        </a>
    );
}

export default WhatsappButton;