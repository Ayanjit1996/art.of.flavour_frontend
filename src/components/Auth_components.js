import { useState } from "react";

export default function Side_component() {
    return (
        <section className="sidebar_container">
            <div className="sidebar_content">
                <div className="sidebar_header">
                    <div className="name_logo_auth_page_box">
                        <img src={"./images/logo.png"} className="auth_page_logo" />
                        <a className="brand_name_auth_page" href="/">
                            <h2 className="brand_name_text_auth">art.of.flavours</h2>
                        </a>
                    </div>
                    <h6 className="tag_line">Discover recipes</h6>
                </div>
                <div className="sidebar_artwork">
                </div>
            </div>
        </section>
    );
}
