import {
    portfolioData,
} from "../data/portfolioData";

function Footer() {
    return (
        <footer
            className="
        border-t
        border-white/5
        px-5
        py-8
        sm:px-8
      "
        >

            <div
                className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          justify-between
          gap-5
          text-xs
          text-white/25
          sm:flex-row
        "
            >

                <p>
                    © {new Date().getFullYear()}{" "}
                    {portfolioData.personal.name}
                </p>

                <p>
                    {portfolioData.personal.location}
                </p>

            </div>

        </footer>
    );
}

export default Footer;