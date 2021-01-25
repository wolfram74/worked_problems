def binToFloat(binstr):
    #based on https://stackoverflow.com/questions/33483846/how-to-convert-32-bit-binary-to-float
    #to check approach
    import struct
    floatie = struct.unpack(
        'f',
        struct.pack(
            'I',
            int(
                binstr,2
                )
            )
        )[0]
    print floatie
    return floatie

def prob1Check():
    t1 = "00000001001000000000000000000000"
    t1n = "00000000110000000000000000000000"
    binToFloat("00000001001000000000000000000000")
    binToFloat("00000000110000000000000000000000")
    print(binToFloat(t1)/binToFloat(t1n))
    binToFloat("10000011000101000000000000000000")
    binToFloat("00010000001000100000000000000000")

if __name__=='__main__':
    prob1Check()
