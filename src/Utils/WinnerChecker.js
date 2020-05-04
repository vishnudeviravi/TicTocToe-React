export const winnerChecker = r => {

    if (r[0] ==='X' && r[1] ==='X' && r[2] ==='X' ) return true;
    if (r[0] ==='O' && r[1] ==='O' && r[2] ==='O' ) return true;
    if (r[3] ==='X' && r[4] ==='X' && r[5] ==='X' ) return true;
    if (r[3] ==='O' && r[4] ==='O' && r[5] ==='O' ) return true;
    if (r[6] ==='X' && r[7] ==='X' && r[8] ==='X' ) return true;
    if (r[6] ==='O' && r[7] ==='O' && r[8] ==='O' ) return true;

    if (r[0] ==='X' && r[3] ==='X' && r[6] ==='X' ) return true;
    if (r[0] ==='O' && r[3] ==='O' && r[6] ==='O' ) return true;
    if (r[1] ==='X' && r[4] ==='X' && r[7] ==='X' ) return true;
    if (r[1] ==='O' && r[4] ==='O' && r[7] ==='O' ) return true;
    if (r[2] ==='X' && r[5] ==='X' && r[8] ==='X' ) return true;
    if (r[2] ==='O' && r[5] ==='O' && r[8] ==='O' ) return true;

    if (r[0] ==='X' && r[4] ==='X' && r[8] ==='X' ) return true;
    if (r[0] ==='O' && r[4] ==='O' && r[8] ==='O' ) return true;
    if (r[2] ==='X' && r[4] ==='X' && r[6] ==='X' ) return true;
    if (r[2] ==='O' && r[4] ==='O' && r[6] ==='O' ) return true;


    
    
    return false;


}