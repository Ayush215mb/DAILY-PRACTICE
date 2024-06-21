#include<stdio.h>

int main()
{
    int row,cols;
    printf("Enter the number of row:");
    scanf("%d",&row);
    printf("Enter the number of column:");
    scanf("%d",&cols);

    int arr1[row][cols];
    int arr2[row][cols];

    printf("Enter %d elements of matrix A:",row*cols);
    for(int i=0; i<row;i++)
    {
        for(int j=0;j<cols;j++)
        {
            scanf("%d",&arr1[i][j]);
        }
    }
    printf("\n");

    printf("Enter %d elements of matrix B:",row*cols);
    for(int i=0; i<row;i++)
    {
        for(int j=0;j<cols;j++)
        {
            scanf("%d",&arr2[i][j]);
        }
    }
    printf(" Matrix-A\n");

    
    for(int i=0; i<row;i++)
    {
        for(int j=0;j<cols;j++)
        {
            printf("%d ",arr1[i][j]);
        }
        printf("\n");
    }
    printf(" Matrix-B\n");

    
    for(int i=0; i<row;i++)
    {
        for(int j=0;j<cols;j++)
        {
            printf("%d ",arr2[i][j]);
        }
        printf("\n");
    }

    //multiplying elements 
    int arr3[row][cols];
    for(int i=0; i<row;i++)
    {
        for(int j=0;j<cols;j++)
        {
            arr3[i][j]= arr1[i][j] * arr2[i][j];
        }
        
    }

     printf(" multiplied matrix:\n");

    
    for(int i=0; i<row;i++)
    {
        for(int j=0;j<cols;j++)
        {
            printf("%d ",arr3[i][j]);
        }
        printf("\n");
    }
}