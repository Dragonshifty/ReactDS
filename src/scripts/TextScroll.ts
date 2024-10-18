export async function textScroll(elements: NodeListOf<HTMLElement>) {
    const textScrolls: string[] = Array.from(
        elements,
        (scroll) => scroll.textContent || ""
    );

    function sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const text = textScrolls[i];
        element.textContent = "";

        for (const char of text) {
            element.textContent += char;
            await sleep(30);
        }
    }
}
