import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="services">Services </Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Services() {
    return(
        <div>
            <h1>[Services]</h1>
        </div>
        );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
            <Outlet />
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>
            Nie znaleziono elementu: {location.pathname}
            </h1>
        </div>
    );
}

export function ContactUs() {
    return(
        <section>
            <h2>Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu
                eget nulla. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula
                in libero.
            </p>
        </section>);
}

export function ContactPl() {
    return(
        <section>
            <h2>Pl</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu
                eget nulla. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula
                in libero.
            </p>
        </section>);
}

export function ContactDe() {
    return(
        <section>
            <h2>De</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu
                eget nulla. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur sodales ligula
                in libero.
            </p>
        </section>);
}