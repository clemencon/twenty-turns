# NRPN Wiki Page

## RPN

GM defines several Registered Parameters, which act like Controllers but are addressed in a different way. In MIDI, every Registered Parameter is assigned a Registered Parameter Number or RPN. Registered Parameters are usually called RPNs for short.

Setting Registered Parameters requires sending (numbers are decimal):

1. two Control Change messages using Control Numbers 101 and 100 to select the parameter, followed by
2. any number of Data Entry messages of one or two bytes (MSB = Controller #6, LSB = Controller #38), and finally
3. an "End of RPN" message

The following global Registered Parameter Numbers (RPNs) are standardized (the parameter is specified by RPN LSB/MSB pair and the value is set by Data Entry LSB/MSB pair):

- 0,0 Pitch bend range
- 1,0 Channel Fine tuning
- 2,0 Channel Coarse tuning

An example of an RPN control sequence to set coarse tuning to A440 (parm 2, value 64) is 101:0, 100:2, 6:64, 101:127, 100:127.

## NRPN

Non-Registered Parameter Number (NRPN) is part of the Musical Instrument Digital Interface (MIDI) specification for control of electronic musical instruments. NRPNs allow manufacturer-specific or instrument-specific MIDI controllers that are not part of the basic MIDI standard.

Unlike other MIDI controllers (such as velocity, modulation, volume, etc.), NRPNs require more than one item of controller data to be sent. First, controller 99 - NRPN Most Significant Byte (MSB) - followed by 98 - NRPN Least Significant Byte (LSB) sent as a pair specify the parameter to be changed. Controller 6 then sets the value of the relevant parameter. Controller 38 may optionally then be sent as a fine adjustment to the value set by controller 6.[1]

This fine adjustment is part of the conventional MIDI controller specification, where any of the first 32 controls can be optionally paired with a control offset 32 higher. This is the rare 14-bit Continuous Controller feature of the MIDI specification, and NRPNs simply take advantage of that existing option in the same way to offer 16,384 possible values instead of only 128.

NRPNs allow MIDI control of a vastly greater number of parameters than the basic 121 found in the basic MIDI standard.
