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


const m1Slider = document.getElementById("m1-slider");
if (!(m1Slider instanceof HTMLInputElement)) throw Error();

m1Slider.oninput = () => {
    const output = midi.outputs.values().next().value;
    if (!(output instanceof MIDIOutput)) throw Error();
    const value = Number.parseInt(m1Slider.value);
    output.send([176, 1, value]);
    console.log("Slider value:", value);
};

const voiceFmAmountSlider = document.getElementById("voice-fm-amount");
if (!(voiceFmAmountSlider instanceof HTMLInputElement)) throw Error();

voiceFmAmountSlider.oninput = () => {
    const output = midi.outputs.values().next().value;
    if (!(output instanceof MIDIOutput)) throw Error();
    const value = Number.parseInt(voiceFmAmountSlider.value);

    // Send NRPN message for Voice FM Amount (NRPN 9)
    // NRPN MSB (CC 99) = 0
    // NRPN LSB (CC 98) = 9
    // Data Entry MSB (CC 6) = value >> 7
    // Data Entry LSB (CC 38) = value & 0x7F
    output.send([0xB0, 99, 0]);           // NRPN MSB
    output.send([0xB0, 98, 9]);           // NRPN LSB (parameter 9)
    output.send([0xB0, 6, value >> 7]);   // Data Entry MSB
    output.send([0xB0, 38, value & 0x7F]); // Data Entry LSB

    console.log("Voice FM Amount:", value);
};

const analogDriftSlider = document.getElementById("analog-drift");
if (!(analogDriftSlider instanceof HTMLInputElement)) throw Error();

analogDriftSlider.oninput = () => {
    const output = midi.outputs.values().next().value;
    if (!(output instanceof MIDIOutput)) throw Error();
    const value = Number.parseInt(analogDriftSlider.value);

    // Send NRPN message for Analog Drift (NRPN 7)
    // NRPN MSB (CC 99) = 0
    // NRPN LSB (CC 98) = 7
    // Data Entry MSB (CC 6) = value >> 7
    // Data Entry LSB (CC 38) = value & 0x7F
    output.send([0xB0, 99, 0]);           // NRPN MSB
    output.send([0xB0, 98, 7]);           // NRPN LSB (parameter 7)
    output.send([0xB0, 6, value >> 7]);   // Data Entry MSB
    output.send([0xB0, 38, value & 0x7F]); // Data Entry LSB

    console.log("Analog Drift:", value);
};