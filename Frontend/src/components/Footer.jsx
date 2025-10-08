export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <img src="./assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                <img src="./assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                
                <div className="flex flex-col lg:flex-row">


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:praveenproficient14@gmail.com ">praveenproficient14@gmail.com </a>
                </div>

                
                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/phone_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/phone_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="tel:8668086652">+91 86680 86652</a>
                </div>
                
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <span>Praveen</span>. All rights reserved.</p>
                <p>Chennai, Tamilnadu.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://wa.me/918668086652">WhatsApp</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/praveen-p-949981175/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.instagram.com/praveenviji_?igsh=ZmJudXVvNng3Y3l0">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}