#!/user/bin/env python3

import random
 
def FlipCoin():
    """ Flip Coin """
    if random.randrang(0,2) == 0:
        return "tails"
    return "heads"



def main(num_times):
    heads = 0
    for n in range(num_times):
        if FlipCoin() == "heads":
            heads += 1
    print(f'with {num_times} flips "heads" came up {heads} '
          f"times, or {heads*100/num_times:.1f}% of flips. ")
