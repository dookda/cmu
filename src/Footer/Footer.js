import React from "react";
import './../assets/css/soft-ui-dashboard.min.css';

const Footer = () => {
    return (
        <footer className="footer pt-3  ">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <div className="copyright text-center text-sm text-muted text-lg-start">
                            © <script>
                                document.write(new Date().getFullYear())
                            </script>2022,
                            made with <i class="fa fa-heart"></i> by
                            <a href="#https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative Tim</a>
                            for a better web.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
