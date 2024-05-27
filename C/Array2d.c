#include<stdio.h>
//taking input and printing the array
int main(){
    int arr[2][2];

    printf("Enter the elements of array: ");

    for(int i=0; i<2;i++){

        for(int j=0;j<2;j++){
                scanf("%d ",&arr[i][j]);

        }
    }
printf("The arrays are ");
    for(int i=0; i<2;i++){

        for(int j=0;j<2;j++){
                printf("%d ",arr[i][j]);

        }
    }
    return 0;
}
