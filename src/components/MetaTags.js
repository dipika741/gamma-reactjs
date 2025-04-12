import { useEffect } from "react";

const MetaTags = ({ title, description, keywords }) => {
    useEffect(() => {
        document.title = title || "Default Title";

        const setMetaTag = (name, content) => {
            let element = document.querySelector(`meta[name='${name}']`);
            if (!element) {
                element = document.createElement("meta");
                element.name = name;
                document.head.appendChild(element);
            }
            element.content = content;
        };

        setMetaTag("description", description || "Default description");
        setMetaTag("keywords", keywords || "default, keywords");
    }, [title, description, keywords]);

    return null;
};

export default MetaTags;
