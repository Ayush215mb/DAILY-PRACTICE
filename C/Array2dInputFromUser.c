#include<stdio.h>

int main()
{
    int col,row;

    printf("Enter the  number of rows: ");
    scanf("%d",&row);

    printf("Enter the number of cols: ");
    scanf("%d",&col);

    int arr[row][col];

printf("Enter %d elements for the array: ",row*col);

    for(int i=0; i<row; i++){

        for(int j=0; j<col;j++){

            scanf("%d",&arr[i][j]);
           
        }
    }


printf("\n\nThe values are: \n");

    for(int i=0; i<row; i++){

        for(int j=0; j<col;j++){

            printf(" %d, ",arr[i][j]);
        }
        printf("\n");
    }


}