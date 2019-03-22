main()
{
/*
Code snippet Switch (% or ratio)
use the switch/case statment to randomly execute "transactions" in loadrunner or functions in ANSI C
*/

        //declaration
        const int list[] = {15,15,25,45};   //Count out of the total each action should be executed
        int i, j, k, l, listTotal, size = sizeof(list)/sizeof(list[0]);

        for (j=listTotal=0; j<size; listTotal+=list[j++]);     //Set listTotal to the sum of all values in the list array
        srand(time(NULL));
        i = rand() % listTotal + 1;  //Generate a number between 1 and listTotal
        for (j=k=l=0; j<size; k+=i>(l+=list[j++]));     //Set k equal to a value from 0 to (size - 1)
        lr_output_message("number of items in list=%i, total sum of items=%i, random value=%i, case value to choose=%i sum of items=%i",size, listTotal,i,k,l);
        
        switch(k) {
        //  will execute Actions (functions) using numeric percentage values, in this case, but can be used with other ratios
                case 0:         Action1();    //15%
                   break;
                case 1:         Action2();    //15%
                   break;
                case 2:         Action3();    //25%
                   break;
                case 3:         Action4();    //45%
                   break;
                default:        errorz();
                }
        
        return 0;
}

Action1(){lr_message("This is the 1st action");}
Action2(){lr_message("This is the 2nd action");}
Action3(){lr_message("This is the 3rd action");}
Action4(){lr_message("This is the 4th action");}
errorz(){lr_message("~~~Shouldn't see this unless you missed a value");}
