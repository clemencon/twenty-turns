import "./style.css";

console.info("Twenty ☉ Turns");

const midi = await navigator.requestMIDIAccess();

midi.inputs.forEach((input) => input.onmidimessage = logMidiMessage);
function logMidiMessage(message: MIDIMessageEvent): void {
    if (!message.data) return;
    console.log("🌞", message.data);
    const [command, note, velocity] = message.data;
    console.log(`Received: command: ${command}, note: ${note}, velocity: ${velocity}`);
}

const c4button = document.getElementById("c4");
if (c4button === null) throw Error();
c4button.onclick = () => playC4();
function playC4() {
    const output = midi.outputs.values().next().value;
    if (!(output instanceof MIDIOutput)) throw Error();
    output.send([0x90, 60, 100]);
    setTimeout(() => output.send([0x80, 60, 0]), 500);
}


const testSlider = document.getElementById("test-slider");
if (!(testSlider instanceof HTMLInputElement)) throw Error();

testSlider.oninput = () => {
    console.log("Slider value:", testSlider.value);
};