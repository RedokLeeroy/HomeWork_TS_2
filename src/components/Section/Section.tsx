import React from "react"
export const Section = ({title, children}:{title: string, children: JSX.Element }):JSX.Element => <section>
    <h2>{title}</h2>
    <div>{children}</div>
</section>
